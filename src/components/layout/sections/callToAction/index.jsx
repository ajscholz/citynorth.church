import React from 'react'
import PropTypes from 'prop-types'

const Component = () => null

export const CTA_APPEARANCES = {
  'Simple Centered': (data) => <Component sectionData={data} />,
  'Simple Centered Color': (data) => <Component sectionData={data} />,
  'Simple Justified': (data) => <Component sectionData={data} />,
  'Simple Justified Light Color': (data) => <Component sectionData={data} />,
  'Simple Stacked': (data) => <Component sectionData={data} />,
  'Split With Image': (data) => <Component sectionData={data} />,
  'Color Panel With Overlapping Image': (data) => (
    <Component sectionData={data} />
  ),
}

const CallToActionSection = ({ section }) => {
  const { sectionTypeAppearance } = section
  const { appearance } = sectionTypeAppearance

  return CTA_APPEARANCES[appearance](section)
}

CallToActionSection.propTypes = {
  section: PropTypes.object.isRequired,
}

export default CallToActionSection

// export const setupFeatures = (data, desiredLength) => {
//   const newData = [...data]
//   newData.splice(desiredLength, data.length - desiredLength)

//   return newData
// }
