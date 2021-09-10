import React from 'react'
import PropTypes from 'prop-types'

import SimpleCentered from './SimpleCentered'
import LargeAvatar from './LargeAvatar'
import OverlappingImage from './OverlappingImage'
import BackgroundImage from './BackgroundImage'

export const STORY_APPEARANCES = {
  'Simple Centered': (data) => <SimpleCentered sectionData={data} />,
  'Large Avatar': (data) => <LargeAvatar sectionData={data} />,
  'Overlapping Image': (data) => <OverlappingImage sectionData={data} />,
  'Background Image': (data) => <BackgroundImage sectionData={data} />,
}

const StorySection = ({ section }) => {
  const { sectionTypeAppearance } = section
  const { appearance } = sectionTypeAppearance

  return STORY_APPEARANCES[appearance](section)
}

StorySection.propTypes = {
  section: PropTypes.object.isRequired,
}

export default StorySection
