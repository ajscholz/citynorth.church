import React from 'react'
import CenteredIconGrid from '../layout/sections/features/CenteredIconGrid'
import ListGrid from '../layout/sections/features/ListGrid'

import { section } from '../data/testData'
import List from '../layout/sections/features/List'
import OffsetGrid from '../layout/sections/features/OffsetGrid'
import ThreeColSimple from '../layout/sections/features/ThreeColSimple'
import BrandGrid from '../layout/sections/features/BrandGrid'

const SandboxPage = () => {
  return (
    <>
      <BrandGrid sectionData={section} />
      <ThreeColSimple sectionData={section} />
      <OffsetGrid sectionData={section} />
      <List sectionData={section} />
      <CenteredIconGrid sectionData={section} />
      <ListGrid sectionData={section} />
    </>
  )
}

export default SandboxPage
