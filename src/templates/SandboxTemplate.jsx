import React from 'react'
import { graphql } from 'gatsby'

import Header from '../components/layout/Header'
import Features from '../components/layout/sections/features'

const SandboxPage = ({ data }) => {
  const { page } = data
  const { banner, sections } = page

  const sectionMap = sections.map((section) => {
    const { type } = section.sectionTypeAppearance

    return type === 'Features' ? (
      <Features section={section} />
    ) : (
      <div className='p-8 w-full bg-red-500 text-white text-center text-2xl'>
        Content type not set up yet
      </div>
    )
  })

  return (
    <>
      <Header bannerQueryData={banner} />
      {sectionMap.map((section) => (
        <section key={section.id}>{section}</section>
      ))}
    </>
  )
}

export default SandboxPage

export const query = graphql`
  query ($slug: String!) {
    page: contentfulPage(slug: { eq: $slug }) {
      banner {
        ...bannerFragment
      }
      sections {
        id: contentful_id
        title
        subtitle
        body {
          raw
        }
        sectionTypeAppearance {
          type: section
          appearance
        }
        contentBlocks {
          primaryText
          secondaryText
          body {
            raw
          }
          icon
        }
      }
    }
  }
`
