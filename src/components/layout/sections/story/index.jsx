import React from 'react'
import PropTypes from 'prop-types'

const Component = () => null

export const STORY_APPEARANCES = {
  'Simple Centered': (data) => <Component sectionData={data} />,
  'Side-by-side': (data) => <Component sectionData={data} />,
  'Large Avatar': (data) => <Component sectionData={data} />,
  'Overlapping Image': (data) => <Component sectionData={data} />,
  'Background Image': (data) => <Component sectionData={data} />,
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
