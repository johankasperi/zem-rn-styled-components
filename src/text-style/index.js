import { NUMERICAL_DECIMAL_PRECISION } from '../constants'
import {
  generateName,
  uppercaseFirst,
  round,
  themeColor,
  createJavascriptStringFromObj
} from '../utils'

const generateTextComponentsFromProject = (options, project, textStyles) => {
  let components = ''
  let fonts = {}
  for (let textStyle of textStyles) {
    const fontFaceName = generateName(textStyle.fontFace)
    if (!fonts[fontFaceName]) {
      fonts[fontFaceName] = textStyle.fontFace
    }
    components += `${generateTextComponentFromTextStyle(
      project,
      options,
      textStyle
    )}\n\n`
  }

  const fontsObjStr = createJavascriptStringFromObj(fonts)
  return `// Fonts (Put this in your theme)\n\nconst Fonts = ${fontsObjStr}\n\n// Text components\n\n${components}`
}

export const generateTextComponentFromTextStyle = (
  project,
  options,
  textStyle
) => {
  const styleObj = {
    fontFamily: `theme.${options.fontThemePrefix || 'font'}.${generateName(
      textStyle.fontFace
    )}`,
    fontSize: `${textStyle.fontSize &&
      round(textStyle.fontSize, NUMERICAL_DECIMAL_PRECISION)}${
      options.fontScale ? ' * (props.fontScale || 1)' : ''
    }`,
    lineHeight: `${textStyle.lineHeight &&
      round(textStyle.lineHeight, NUMERICAL_DECIMAL_PRECISION)}${
      options.lineHeight ? ' * (props.fontScale || 1)' : ''
    }`,
    letterSpacing:
      textStyle.letterSpacing &&
      round(textStyle.letterSpacing, NUMERICAL_DECIMAL_PRECISION),
    textAlign: textStyle.textAlign
  }
  if (textStyle.color) {
    const colorValue = themeColor(options, project, textStyle.color)
    styleObj.color = `${
      options.colorOverride ? 'props.color || ' : ''
    }${colorValue}`
  }

  const textStylesStr = createJavascriptStringFromObj(styleObj)
    .replace(/fontSize: '(.*)'/g, 'fontSize: $1')
    .replace(/lineHeight: '(.*)'/g, 'lineHeight: $1')
    .replace(/color: 'props(.*)'/g, 'color: props$1')
  const componentName = uppercaseFirst(generateName(textStyle.name))
  const baseComponent = options.textBaseComponent
    ? `(${options.textBaseComponent})`
    : '.text'

  return `export const ${componentName} = glamorous${baseComponent}((props, theme) => (${textStylesStr}))`
}

export { generateTextComponentsFromProject }
