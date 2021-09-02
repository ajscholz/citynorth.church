import React from 'react'
import PropTypes from 'prop-types'

const Component = () => null

export const HEADER_APPEARANCES = {
  'Simple Centered': (data) => <Component sectionData={data} />,
  'Simple Dark': (data) => <Component sectionData={data} />,
  'Brand Color With Background Image': (data) => (
    <Component sectionData={data} />
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
