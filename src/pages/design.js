import { graphql } from 'gatsby'
import React from 'react'

import SEO from '../components/SEO'
import FAQ from '../components/layout/sections/faq'

const DesignPage = ({ data }) => {
  const { section } = data.allContentfulSection.edges[0]
  return (
    <>
      <SEO index={false} />
      <div className='mx-auto mb-6 w-3/4 md:w-1/2 lg:w-1/3 py-4 px-24 text-center text-2xl text-gray-800 border-b-2 border-gray-300'>
        Design Page
      </div>

      <FAQ
        section={{
          ...section,
          sectionTypeAppearance: { appearance: 'Two Column' },
        }}
      />

      <FAQ
        section={{
          ...section,
          sectionTypeAppearance: { appearance: 'Offset' },
        }}
      />

      <FAQ section={section} />
    </>
  )
}

export default DesignPage

export const query = graphql`
  query allSectionQuery {
    allContentfulSection(
      filter: { sectionTypeAppearance: { section: { eq: "FAQ" } } }
    ) {
      edges {
        section: node {
          id: contentful_id
          name
          title
          subtitle
          body {
            raw
          }
          sectionTypeAppearance {
            section
            appearance
          }
          contentBlocks {
            id: contentful_id
            name
            primaryText
            secondaryText
            body {
              raw
            }
          }
        }
      }
    }
  }
`
