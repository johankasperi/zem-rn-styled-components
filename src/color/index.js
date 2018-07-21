import { getColorStringByFormat, createJavascriptStringFromObj } from '../utils'

const generateColorObjectFromProject = (options, project, colors) => {
  const colorsObject = {}
  for (let color of colors) {
    if (color.name) {
      colorsObject[color.name] = getColorStringByFormat(
        color,
        options.colorFormat
      )
    }
  }
  const colorsStylesStr = createJavascriptStringFromObj(colorsObject)
  return `const base = ${colorsStylesStr}`
}

export { generateColorObjectFromProject }
