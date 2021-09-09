export const combineClassNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

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

export const processTitle = (str) => {
  str.trim()

  // split the string if it's longer than 20 characters
  const split = str.length >= 25

  if (!split) return [str]
  else {
    const array = str.split(' ')
    const middle = Math.round(array.length / 2)
    const line1 = array.slice(0, middle).join(' ')
    const line2 = array.slice(middle).join(' ')

    return [line1, line2]
  }
}
