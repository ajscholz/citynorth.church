import React from 'react'
import PropTypes from 'prop-types'

import SimpleCentered from './SimpleCentered'
import SimpleDark from './SimpleDark'
import BrandColorWithBackgroundImage from './BrandColorWithBackgroundImage'

export const HEADER_APPEARANCES = {
  'Simple Centered': (data) => <SimpleCentered sectionData={data} />,
  'Simple Dark': (data) => <SimpleDark sectionData={data} />,
  'Brand Color With Background Image': (data) => (
    <BrandColorWithBackgroundImage sectionData={data} />
  ),
}

const HeaderSection = ({ section }) => {
  const { sectionTypeAppearance } = section
  const { appearance } = sectionTypeAppearance

  return HEADER_APPEARANCES[appearance](section)
}

HeaderSection.propTypes = {
  section: PropTypes.object.isRequired,
}

export default HeaderSection
