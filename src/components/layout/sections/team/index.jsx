import React from 'react'
import PropTypes from 'prop-types'

import WithSmallImages from './WithSmallImages'
import WithVeritcalImages from './WithVeritcalImages'
import GridWithRoundImages from './GridWithRoundImages'

export const TEAM_APPEARANCES = {
  'With Small Images': (data) => <WithSmallImages sectionData={data} />,
  'With Vertical Images': (data) => <WithVeritcalImages sectionData={data} />,
  'Grid With Round Images': (data) => (
    <GridWithRoundImages sectionData={data} />
  ),
}

const TeamSection = ({ section }) => {
  const { sectionTypeAppearance } = section
  const { appearance } = sectionTypeAppearance

  return TEAM_APPEARANCES[appearance](section)
}

TeamSection.propTypes = {
  section: PropTypes.object.isRequired,
}

export default TeamSection
