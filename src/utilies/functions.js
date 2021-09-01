export const combineClassNames = (a, b) => a.concat(' ').concat(b)

export const getFocalPoint = (image, focalPoint) => {
  try {
    const { x, y } = focalPoint.focalPoint
    const { height, width } = image.file.details.image

    const getPerc = (a, b) => {
      let int = (a / b) * 100
      int = Math.round(int)
      return `${int}%`
    }

    const xPerc = getPerc(x, width)
    const yPerc = getPerc(y, height)

    return `${xPerc} ${yPerc}`
  } catch {
    return '50% 50%'
  }
}
