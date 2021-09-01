import React from 'react'
import PropTypes from 'prop-types'

import ListGrid from './ListGrid'
import CenteredIconGrid from './CenteredIconGrid'
import List from './List'
import OffsetGrid from './OffsetGrid'
import ThreeColSimple from './ThreeColSimple'
import BrandGrid from './BrandGrid'
import GridOffsetIcons from './GridOffsetIcons'

const Features = ({ data }) => {
  const { appearance } = data.sectionTypeAppearance

  return appearance === 'List Grid' ? (
    <ListGrid sectionData={data} />
  ) : appearance === 'List' ? (
    <List sectionData={data} />
  ) : (
    <div className='p-8 w-full bg-red-500 text-white text-center text-2xl'>
      Appearance not set up yet
    </div>
  )
}

Features.propTypes = {}

export default Features

export const setupFeatures = (data, desiredLength) => {
  const newData = [...data]
  newData.splice(desiredLength, data.length - desiredLength)

  return newData
}
