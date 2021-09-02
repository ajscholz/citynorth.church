import React from 'react'
import PropTypes from 'prop-types'

const Component = () => null

export const FAQ_APPEARANCES = {
  Centered: (data) => <Component sectionData={data} />,
  Offset: (data) => <Component sectionData={data} />,
  'Two Column': (data) => <Component sectionData={data} />,
}

const FaqSection = ({ section }) => {
  const { sectionTypeAppearance } = section
  const { appearance } = sectionTypeAppearance

  return FAQ_APPEARANCES[appearance](section)
}

FaqSection.propTypes = {
  section: PropTypes.object.isRequired,
}

export default FaqSection
