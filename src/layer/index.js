import { NUMERICAL_DECIMAL_PRECISION } from '../constants'
import { generateTextComponentFromTextStyle } from '../text-style'
import {
  round,
  blendColors,
  themeColor,
  createJavascriptStringFromObj,
  uppercaseFirst,
  generateName
} from '../utils'

const generateLayerComponent = (options, project, layer) => {
  let containerStyle = {}
  containerStyle.height = layer.rect.height
  containerStyle.width = layer.rect.width

  if (layer.fills.length && layer.fills[0].color) {
    const blendedColor = blendColors(layer.fills.map(fill => fill.color))
    containerStyle.backgroundColor = themeColor(options, project, blendedColor)
  }
  if (layer.shadows.length) {
    Object.assign(
      containerStyle,
      generateShadowStyleObject(
        options,
        project,
        layer.shadows[layer.shadows.length - 1],
        layer.type
      )
    )
  }
  if (layer.borders.length) {
    Object.assign(
      containerStyle,
      generateBorderStyleObject(
        options,
        project,
        layer.borders[layer.borders.length - 1],
        layer.type
      )
    )
  }
  if (layer.borderRadius > 0) {
    containerStyle.borderRadius = layer.borderRadius
  }
  if (layer.opacity < 1) {
    containerStyle.opacity = layer.opacity
  }
  if (layer.rotation) {
    containerStyle.transform = [{ rotate: `${layer.rotation}deg` }]
  }

  if (layer.type === 'text') {
    return generateLayerComponentWithText(
      options,
      project,
      layer,
      containerStyle
    )
  }
  if (layer.blur) {
    return generateLayerComponentWithBlur(
      options,
      project,
      layer,
      containerStyle
    )
  }
  const containerStyleStr = createJavascriptStringFromObj(containerStyle)
  let code = `const StyledContainer = glamorous.view((props, theme) => (${containerStyleStr})`
  return code
}

const generateLayerComponentWithText = (
  options,
  project,
  layer,
  containerStyle
) => {
  let code = ''
  let textComponentNames = []
  if (layer.textStyles.length > 0) {
    let textComponentsToImport = ''
    let createdTextComponents = ''
    for (let i = 0; i < layer.textStyles.length; i++) {
      const range = layer.textStyles[i].range
      if (
        range.end === 0 ||
        range.start === layer.content.length ||
        range.start === range.end
      ) {
        continue
      }
      const textStyle = layer.textStyles[i].textStyle
      let projectTextStyle = project.findTextStyleEqual(textStyle)
      let componentName = ''
      if (projectTextStyle) {
        componentName = uppercaseFirst(generateName(projectTextStyle.name))
        // Prevents double text components import
        if (i > 0 && componentName === textComponentNames[i - 1]) {
          continue
        }
        textComponentsToImport += `${componentName}, `
      } else {
        textStyle.name = componentName = `StyledText${i}`
        createdTextComponents += `${generateTextComponentFromTextStyle(
          project,
          options,
          textStyle
        )}\n\n`
      }
      textComponentNames.push(componentName)
    }
    if (textComponentsToImport.length > 0) {
      code += `import { ${textComponentsToImport.substring(
        0,
        textComponentsToImport.length - 2
      )} } from '${options.typographyComponentsPath}'\n\n`
    }
    if (createdTextComponents.length > 0) {
      if (options.textBaseComponent) {
        code += `import { ${options.textBaseComponent} } from '${
          options.typographyComponentsPath
        }\n\n`
      }
      code += createdTextComponents
    }
  }
  if (textComponentNames.length > 1) {
    let textChilds = ''
    for (let i = 0; i < textComponentNames.length; i++) {
      textChilds += `<${textComponentNames[i]}>{text${i}}</${
        textComponentNames[i]
      }>`
    }
    const containerStyleStr = createJavascriptStringFromObj(containerStyle)
    code += `const StyledContainer = glamorous.view((props, theme) => (${containerStyleStr})\n\n`
    code += `export const Component = props => {
    const { ${layer.textStyles.map(
    (_, i) => (i > 0 ? ' ' : '') + 'text' + i
  )} } = props
    return <StyledContainer {...props}>
      ${textChilds}
    </StyledContainer>
  }`
  } else {
    const containerStyleStr = createJavascriptStringFromObj(containerStyle)
    code += `export const Component = glamorous(${
      textComponentNames[0]
    }){((props, theme) => (${containerStyleStr})`
  }

  return code
}

const generateLayerComponentWithBlur = (
  options,
  project,
  layer,
  containerStyle
) => {
  let code = ''
  if (options.blurComponentPath) {
    code = `import { BlurView } from '${options.blurComponentPath}'\n\n`
  } else {
    code = "import { BlurView as RNBlurView } from 'react-native-blur'\n\n"
    const containerStyleStr = createJavascriptStringFromObj(containerStyle)
    code += `const StyledContainer = glamorous.view((props, theme) => (${containerStyleStr})\n\n`
    code += `const BlurView = glamorous(RNBlurView)({
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  })\n\n`
  }
  code += `export const Component = props => {
  const { children } = props
  return <StyledContainer {...props}>
    <BlurView blurType="dark" /> // "xlight", "light" or "dark"
    {children}
  </StyledContainer>
}`
  return code
}

const generateShadowStyleObject = (options, project, shadow, layerType) => {
  if (layerType === 'text') {
    const shadowColor = themeColor(options, project, shadow.color)
    return {
      textShadowColor: shadowColor,
      textShadowOffset: {
        width: round(
          shadow.offsetX / project.densityDivisor,
          NUMERICAL_DECIMAL_PRECISION
        ),
        height: round(
          shadow.offsetY / project.densityDivisor,
          NUMERICAL_DECIMAL_PRECISION
        )
      },
      textShadowRadius: round(
        shadow.blurRadius / project.densityDivisor,
        NUMERICAL_DECIMAL_PRECISION
      )
    }
  }

  if (project.type === 'android') {
    return {}
  }

  // "iOS" doesn't have shadow spread
  const shadowColor = themeColor(options, project, shadow.color)

  return {
    shadowColor: shadowColor,
    shadowOffset: {
      width: round(
        shadow.offsetX / project.densityDivisor,
        NUMERICAL_DECIMAL_PRECISION
      ),
      height: round(
        shadow.offsetY / project.densityDivisor,
        NUMERICAL_DECIMAL_PRECISION
      )
    },
    shadowRadius: round(
      shadow.blurRadius / project.densityDivisor,
      NUMERICAL_DECIMAL_PRECISION
    ),
    shadowOpacity: 1.0
  }
}

const generateBorderStyleObject = (options, project, border, layerType) => {
  if (
    layerType === 'text' ||
    (border.fill && border.fill.type === 'gradient')
  ) {
    return {}
  }

  const borderColor = themeColor(options, project, border.fill.color)
  return {
    borderStyle: 'solid',
    borderWidth: round(border.thickness / project.densityDivisor, 1),
    borderColor
  }
}

export { generateLayerComponent }
