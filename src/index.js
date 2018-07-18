import { generateTextComponentsFromProject } from './text-style'
import { generateColorObjectFromProject } from './color'

import { OPTION_NAMES } from './constants'

const styleguideColors = (context, colors) => {
  const options = {
    colorFormat: context.getOption(OPTION_NAMES.COLOR_FORMAT)
  }

  const code = generateColorObjectFromProject(options, context.project, colors)

  return {
    code,
    language: 'javascript'
  }
}

const styleguideTextStyles = (context, textStyles) => {
  const options = {
    colorFormat: context.getOption(OPTION_NAMES.COLOR_FORMAT),
    textBaseComponent: context.getOption(OPTION_NAMES.TEXT_BASE_COMPONENT),
    colorThemePrefix: context.getOption(OPTION_NAMES.COLOR_THEME_PREFIX),
    fontThemePrefix: context.getOption(OPTION_NAMES.FONT_THEME_PREFIX)
  }

  const code = generateTextComponentsFromProject(
    options,
    context.project,
    textStyles
  )

  return {
    code,
    language: 'javascript'
  }
}

const layer = (context, layer) => {
  const object = {
    layerName: layer.name,
    projectName: context.project.name
  }

  const JSONString = JSON.stringify(object, null, 2)

  return {
    code: JSONString,
    language: 'json'
  }
}

const comment = (context, text) => {
  return `// ${text}`
}

const exportStyleguideColors = (context, colors) => {
  const codeObject = styleguideColors(context, colors)
  const code = codeObject.code

  return {
    code,
    filename: 'colors.js',
    language: 'javascript'
  }
}

const exportStyleguideTextStyles = (context, textStyles) => {
  const codeObject = styleguideTextStyles(context, textStyles)
  const code = codeObject.code

  return {
    code,
    filename: 'Fonts.js',
    language: 'javascript'
  }
}

export default {
  layer,
  styleguideColors,
  styleguideTextStyles,
  comment,
  exportStyleguideColors,
  exportStyleguideTextStyles
}
