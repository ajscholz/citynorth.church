import React from 'react'
import PropTypes from 'prop-types'

import ListGrid from './ListGrid'
import CenteredIconGrid from './CenteredIconGrid'
import List from './List'
import OffsetGrid from './OffsetGrid'
import ThreeColSimple from './ThreeColSimple'
import BrandGrid from './BrandGrid'
import GridOffsetIcons from './GridOffsetIcons'

const FEATURE_APPEARANCES = {
  'List Grid': (data) => <ListGrid sectionData={data} />,
  'Centered Icon Grid': (data) => <CenteredIconGrid sectionData={data} />,
  List: (data) => <List sectionData={data} />,
  'Offset Grid': (data) => <OffsetGrid sectionData={data} />,
  'Simple Three Column': (data) => <ThreeColSimple sectionData={data} />,
  'Brand Color Grid': (data) => <BrandGrid sectionData={data} />,
  'Grid With Offset Icons': (data) => <GridOffsetIcons sectionData={data} />,
}

const Features = ({ section }) => {
  const { sectionTypeAppearance } = section
  const { appearance } = sectionTypeAppearance

  return FEATURE_APPEARANCES[appearance](section)
}

Features.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Features

export const setupFeatures = (data, desiredLength) => {
  const newData = [...data]
  newData.splice(desiredLength, data.length - desiredLength)

  return newData
}
