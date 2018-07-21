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
  const colorValue = themeColor(options, project, textStyle.color)
  const styleObj = {
    fontFamily: `theme.${options.fontThemePrefix || 'font'}.${generateName(
      textStyle.fontFace
    )}`,
    fontSize:
      textStyle.fontSize &&
      round(textStyle.fontSize, NUMERICAL_DECIMAL_PRECISION),
    lineHeight:
      textStyle.lineHeight &&
      round(textStyle.lineHeight, NUMERICAL_DECIMAL_PRECISION),
    letterSpacing:
      textStyle.letterSpacing &&
      round(textStyle.letterSpacing, NUMERICAL_DECIMAL_PRECISION),
    textAlign: textStyle.textAlign,
    color: colorValue
  }
  const textStylesStr = createJavascriptStringFromObj(styleObj)
  const componentName = uppercaseFirst(generateName(textStyle.name))
  const baseComponent = options.textBaseComponent
    ? `(${options.textBaseComponent})`
    : '.text'
  return `const ${componentName} = glamorous${baseComponent}((props, theme) => (${textStylesStr}))`
}

export { generateTextComponentsFromProject }
