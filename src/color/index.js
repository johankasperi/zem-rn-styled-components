import { JSON_SPACING } from '../constants'
import { getColorStringByFormat } from '../utils'

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
  let colorsStylesStr = JSON.stringify(colorsObject, null, JSON_SPACING)
  colorsStylesStr = colorsStylesStr.replace(/"(.+)":/g, '$1:')
  return `const base = ${colorsStylesStr}`
}

export { generateColorObjectFromProject }
