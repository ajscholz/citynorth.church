import React from 'react'

// import { section } from '../data/testData'
import ListGrid from '../layout/sections/features/ListGrid'
import CenteredIconGrid from '../layout/sections/features/CenteredIconGrid'
import List from '../layout/sections/features/List'
import OffsetGrid from '../layout/sections/features/OffsetGrid'
import ThreeColSimple from '../layout/sections/features/ThreeColSimple'
import BrandGrid from '../layout/sections/features/BrandGrid'

import { graphql, useStaticQuery } from 'gatsby'

const SandboxPage = () => {
  const query = useStaticQuery(graphql`
    query MyQuery {
      allContentfulSection(
        filter: { page: { elemMatch: { title: { eq: "Sandbox" } } } }
      ) {
        edges {
          node {
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
    }
  `)

  const type =
    query.allContentfulSection.edges[0].node.sectionTypeAppearance.appearance

  console.log('type', type)

  // const component =
  //   type === 'List Grid' ? (
  //     <ListGrid sectionData={query.allContentfulSection.edges[0].node} />
  //   ) : type === 'List' ? (
  //     <List />
  //   ) : null

  return type === 'List Grid' ? (
    <CenteredIconGrid sectionData={query.allContentfulSection.edges[0].node} />
  ) : type === 'Centered Icon Grid' ? (
    <CenteredIconGrid sectionData={query.allContentfulSection.edges[0].node} />
  ) : null
}

export default SandboxPage
