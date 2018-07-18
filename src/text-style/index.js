import { JSON_SPACING, NUMERICAL_DECIMAL_PRECISION } from '../constants'
import {
  generateName,
  uppercaseFirst,
  getColorStringByFormat,
  round
} from '../utils'

const generateTextComponentsFromProject = (options, project, textStyles) => {
  let components = ''
  for (let textStyle of textStyles) {
    components += `${generateTextComponentFromTextStyle(
      project,
      options.colorFormat,
      options.colorThemePrefix,
      options.fontThemePrefix,
      textStyle
    )}\n\n`
  }

  return components
}

const generateTextComponentFromTextStyle = (
  project,
  colorFormat,
  colorThemePrefix,
  fontThemePrefix,
  textStyle
) => {
  const color =
    project.findColorEqual(textStyle.color) ||
    getColorStringByFormat(textStyle.color, colorFormat)
  const colorValue = color.name
    ? `theme.${colorThemePrefix || 'color'}.${color.name}`
    : color
  const styleObj = { fontFamily: `theme.${fontThemePrefix || 'font'}.${generateName(textStyle.fontFace)}`, fontSize: textStyle.fontSize && round(textStyle.fontSize, NUMERICAL_DECIMAL_PRECISION), lineHeight: textStyle.lineHeight && round(textStyle.lineHeight, NUMERICAL_DECIMAL_PRECISION), letterSpacing: textStyle.letterSpacing && round(textStyle.letterSpacing, NUMERICAL_DECIMAL_PRECISION), textAlign: textStyle.textAlign, color: colorValue };
  let textStylesStr = JSON.stringify(styleObj, null, JSON_SPACING)
  textStylesStr = textStylesStr
    .replace(/"(.+)":/g, '$1:')
    .replace(/"theme.(.*)"/g, 'theme.$1')
  const componentName = uppercaseFirst(generateName(textStyle.name))
  return `const ${componentName} = glamorous(Base)((props, theme) => (${textStylesStr}))`
}

export { generateTextComponentsFromProject }
