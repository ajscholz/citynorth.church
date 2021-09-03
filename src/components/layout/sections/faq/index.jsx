import React from 'react'
import PropTypes from 'prop-types'

import CenteredFAQ from './CenteredFAQ'
import OffsetFAQ from './OffsetFAQ'
import TwoColFAQ from './TwoColFAQ'

export const FAQ_APPEARANCES = {
  Centered: (data) => <CenteredFAQ sectionData={data} />,
  Offset: (data) => <OffsetFAQ sectionData={data} />,
  'Two Column': (data) => <TwoColFAQ sectionData={data} />,
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
