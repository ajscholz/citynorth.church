export const setupFeatures = (data, desiredLength) => {
  const newData = [...data]
  newData.splice(desiredLength, data.length - desiredLength)

  return newData
}
