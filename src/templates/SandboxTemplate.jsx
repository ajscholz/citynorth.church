import React from 'react'

import { graphql } from 'gatsby'

// import { section } from '../data/testData'
import ListGrid from '../components/layout/sections/features/ListGrid'
import CenteredIconGrid from '../components/layout/sections/features/CenteredIconGrid'
import List from '../components/layout/sections/features/List'
import OffsetGrid from '../components/layout/sections/features/OffsetGrid'
import ThreeColSimple from '../components/layout/sections/features/ThreeColSimple'
import BrandGrid from '../components/layout/sections/features/BrandGrid'

import { sections } from '../data/testData'
import GridOffsetIcons from '../components/layout/sections/features/GridOffsetIcons'

const SandboxPage = ({ data }) => {
  const { page } = data

  //   const type =
  // data.sections[0].node.sectionTypeAppearance.appearance

  // const component =
  //   type === 'List Grid' ? (
  //     <ListGrid sectionData={query.allContentfulSection.edges[0].node} />
  //   ) : type === 'List' ? (
  //     <List />
  //   ) : null

  // return type === 'List Grid' ? (
  //   <ListGrid sectionData={query.allContentfulSection.edges[0].node} />
  // ) : type === 'Centered Icon Grid' ? (
  //   <CenteredIconGrid sectionData={query.allContentfulSection.edges[0].node} />
  // ) : null

  return (
    <>
      <h1 className='text-4xl font-bold'>{page.title}</h1>
      <GridOffsetIcons sectionData={sections[0]} />
      <ListGrid sectionData={sections[0]} />
      <CenteredIconGrid sectionData={sections[0]} />
      <List sectionData={sections[0]} />
      <OffsetGrid sectionData={sections[0]} />
      <ThreeColSimple sectionData={sections[0]} />
      <BrandGrid sectionData={sections[0]} />
    </>
  )
}

export default SandboxPage

export const query = graphql`
  query ($slug: String!) {
    page: contentfulPage(slug: { eq: $slug }) {
      title
      sections {
        id
        title
        subtitle
        sectionTypeAppearance {
          section
          appearance
        }
        body {
          raw
        }
        contentBlocks {
          ... on ContentfulContent {
            id
            primaryText
            icon
            body {
              raw
            }
          }
        }
      }
    }
  }
`
