import { JSON_SPACING, NUMERICAL_DECIMAL_PRECISION } from '../constants'
import {
  generateName,
  uppercaseFirst,
  getColorStringByFormat,
  round
} from '../utils'

const generateTextComponentsFromProject = (options, project, textStyles) => {
  let components = ''
  let fonts = {}
  for (let textStyle of textStyles) {
    const fontFaceName = generateName(textStyle.fontFace)
    if (!fonts[fontFaceName]) {
      fonts[fontFaceName] = textStyle.fontFace
    }
    components += `${generateTextComponentFromTextStyle(project, options, textStyle)}\n\n`;
  }

  let fontsObjStr = JSON.stringify(fonts, null, JSON_SPACING)
  fontsObjStr = fontsObjStr.replace(/"(.+)":/g, "$1:");
  return `// Fonts (Put this in your theme)\n\nconst Fonts = ${fontsObjStr}\n\n// Text components\n\n${components}`
}

const generateTextComponentFromTextStyle = (
  project,
  options,
  textStyle
) => {
  const color =
    project.findColorEqual(textStyle.color) ||
    getColorStringByFormat(textStyle.color, options.colorFormat)
  const colorValue = color.name
    ? `theme.${options.colorThemePrefix || 'color'}.${color.name}`
    : color
  const styleObj = { fontFamily: `theme.${options.fontThemePrefix || 'font'}.${generateName(textStyle.fontFace)}`, fontSize: textStyle.fontSize && round(textStyle.fontSize, NUMERICAL_DECIMAL_PRECISION), lineHeight: textStyle.lineHeight && round(textStyle.lineHeight, NUMERICAL_DECIMAL_PRECISION), letterSpacing: textStyle.letterSpacing && round(textStyle.letterSpacing, NUMERICAL_DECIMAL_PRECISION), textAlign: textStyle.textAlign, color: colorValue };
  let textStylesStr = JSON.stringify(styleObj, null, JSON_SPACING)
  textStylesStr = textStylesStr
    .replace(/"(.+)":/g, '$1:')
    .replace(/"theme.(.*)"/g, 'theme.$1')
  const componentName = uppercaseFirst(generateName(textStyle.name))
  const baseComponent = options.textBaseComponent ? `(${options.textBaseComponent})` : '.text'
  return `const ${componentName} = glamorous${baseComponent}((props, theme) => (${textStylesStr}))`
}

export { generateTextComponentsFromProject }
