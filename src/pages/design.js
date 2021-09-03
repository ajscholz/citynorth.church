import React, { useState } from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/SEO'
import Features from '../components/layout/sections/features'
import Select from '../components/interactive/Select'
import FaqSection from '../components/layout/sections/faq'

const types = [
  { name: 'Features', unavailable: false },
  { name: 'FAQ', unavailable: false },
  { name: 'Call To Action', unavailable: true },
  { name: 'Header', unavailable: true },
  { name: 'Story', unavailable: true },
  { name: 'Team', unavailable: true },
]

const DesignPage = ({ data }) => {
  const [selected, setSelected] = useState(types[0])
  const { featuresSection, faqSection } = data

  return (
    <>
      <SEO index={false} />
      <div className='mx-auto mb-6 w-3/4 md:w-1/2 lg:w-1/3 py-4 px-24 text-center text-2xl text-gray-800 border-b-2 border-gray-300'>
        Design Page
      </div>

      <div className='flex mt-12'>
        <div className='mx-auto'>
          <Select selected={selected} setSelected={setSelected} list={types} />
        </div>
      </div>

      {selected.name === 'Features' && (
        <>
          <Features
            section={{
              ...featuresSection,
              sectionTypeAppearance: { appearance: 'List' },
            }}
          />
          <Features
            section={{
              ...featuresSection,
              sectionTypeAppearance: { appearance: 'Grid With Offset Icons' },
            }}
          />
          <Features
            section={{
              ...featuresSection,
              sectionTypeAppearance: { appearance: 'Brand Color Grid' },
            }}
          />
          <Features
            section={{
              ...featuresSection,
              sectionTypeAppearance: { appearance: 'Simple Three Column' },
            }}
          />
          <Features
            section={{
              ...featuresSection,
              sectionTypeAppearance: { appearance: 'Offset Grid' },
            }}
          />
          <Features
            section={{
              ...featuresSection,
              sectionTypeAppearance: { appearance: 'Centered Icon Grid' },
            }}
          />
          <Features
            section={{
              ...featuresSection,
              sectionTypeAppearance: { appearance: 'List Grid' },
            }}
          />
        </>
      )}

      {selected.name === 'FAQ' && (
        <>
          <FaqSection
            section={{
              ...faqSection,
              sectionTypeAppearance: { appearance: 'Centered' },
            }}
          />
          <FaqSection
            section={{
              ...faqSection,
              sectionTypeAppearance: { appearance: 'Offset' },
            }}
          />
          <FaqSection
            section={{
              ...faqSection,
              sectionTypeAppearance: { appearance: 'Two Column' },
            }}
          />
        </>
      )}
    </>
  )
}

export default DesignPage

export const query = graphql`
  query myQuery {
    featuresSection: contentfulSection(
      contentful_id: { eq: "6IU2yYAkUQ0e1wf1cziimn" }
    ) {
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
    faqSection: contentfulSection(
      contentful_id: { eq: "4Y2UOLcFzFdDRociiR9iAg" }
    ) {
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
`
