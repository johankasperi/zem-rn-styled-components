import { generateTextComponentsFromProject } from './text-style'
import { generateColorObjectFromProject } from './color'
import { generateLayerComponent } from './layer'

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
    fontScale: context.getOption(OPTION_NAMES.FONT_SCALE),
    colorOverride: context.getOption(OPTION_NAMES.COLOR_OVERRIDE),
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
  const options = {
    colorFormat: context.getOption(OPTION_NAMES.COLOR_FORMAT),
    textBaseComponent: context.getOption(OPTION_NAMES.TEXT_BASE_COMPONENT),
    colorThemePrefix: context.getOption(OPTION_NAMES.COLOR_THEME_PREFIX),
    fontThemePrefix: context.getOption(OPTION_NAMES.FONT_THEME_PREFIX),
    typographyComponentsPath: context.getOption(
      OPTION_NAMES.TYPOGRAPHY_COMPONENTS_PATH
    ),
    blurComponentPath: context.getOption(OPTION_NAMES.BLUR_COMPONENT_PATH)
  }
  const code = generateLayerComponent(options, context.project, layer)
  return { code, language: 'javascript' }
}

const comment = (context, text) => {
  return `// ${text}`
}

const exportStyleguideColors = (context, colors) => {
  const codeObject = styleguideColors(context, colors)
  const code = codeObject.code

  return {
    code,
    filename: 'index.js',
    language: 'javascript'
  }
}

const exportStyleguideTextStyles = (context, textStyles) => {
  const codeObject = styleguideTextStyles(context, textStyles)
  const code = codeObject.code

  return {
    code,
    filename: 'index.js',
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
