import React from 'react'
import PropTypes from 'prop-types'

const Component = () => null

export const TEAM_APPEARANCES = {
  'With Small Images': (data) => <Component sectionData={data} />,
  'With Vertical Images': (data) => <Component sectionData={data} />,
  'Grid With Round Images1': (data) => <Component sectionData={data} />,
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
