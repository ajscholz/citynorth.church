import React from 'react'
import PropTypes from 'prop-types'

import SimpleCentered from './SimpleCentered'
import SimpleCenteredColor from './SimpleCenteredColor'
import SimpleJustified from './SimpleJustified'
import SimpleJustifiedLightColor from './SimpleJustifiedLightColor'
import SimpleStacked from './SimpleStacked'
import SplitWithImage from './SplitWithImage'
import ColorPanelOverlappingImage from './ColorPanelOverlappingImage'

export const CTA_APPEARANCES = {
  'Simple Centered': (data) => <SimpleCentered sectionData={data} />,
  'Simple Centered Color': (data) => <SimpleCenteredColor sectionData={data} />,
  'Simple Justified': (data) => <SimpleJustified sectionData={data} />,
  'Simple Justified Light Color': (data) => (
    <SimpleJustifiedLightColor sectionData={data} />
  ),
  'Simple Stacked': (data) => <SimpleStacked sectionData={data} />,
  'Split With Image': (data) => <SplitWithImage sectionData={data} />,
  'Color Panel With Overlapping Image': (data) => (
    <ColorPanelOverlappingImage sectionData={data} />
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
