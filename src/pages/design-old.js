import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/SEO'
import Features, {
  FEATURE_APPEARANCES,
} from '../components/layout/sections/features'
import Select from '../components/interactive/Select'
import FaqSection, { FAQ_APPEARANCES } from '../components/layout/sections/faq'
import { CTA_APPEARANCES } from '../components/layout/sections/callToAction'
import { HEADER_APPEARANCES } from '../components/layout/sections/header'
import { STORY_APPEARANCES } from '../components/layout/sections/story'
import { TEAM_APPEARANCES } from '../components/layout/sections/team'

import { Tab } from '@headlessui/react'

import { combineClassNames } from '../utils/functions'

const types = {
  Features: FEATURE_APPEARANCES,
  FAQ: FAQ_APPEARANCES,
  'Call To Action': CTA_APPEARANCES,
  Header: HEADER_APPEARANCES,
  Story: STORY_APPEARANCES,
  Team: TEAM_APPEARANCES,
}

const DesignPage = ({ data }) => {
  const { featuresSection, faqSection } = data

  return (
    <div className=''>
      <SEO index={false} />
      <header className='flex flex-col items-center bg-gray-800 w-full'>
        <div className='mb-6 py-12 px-6 md:px-12 lg:px-24 max-w-5xl text-center text-gray-50'>
          <h2 className='text-3xl font-bold'>Design Page</h2>
          <p className='mt-6 text-gray-100 text-sm'>
            Use this page to view design options available to you. Browse by
            section type, then select a layout. You'll be able to to see what
            that specific section appearance will look like with dummy data, and
            you'll see different parameters for that section and appearance.
          </p>
        </div>
      </header>

      <div className='w-full flex flex-col items-center px-2 py-10 sm:px-0'>
        <Tab.Group>
          <Tab.List className='max-w-5xl flex space-x-1 sm:space-x-3 md:space-x-5 lg:space-x-8 border-b-2 border-gray-200'>
            {Object.keys(types).map((type) => (
              <Tab
                key={type}
                // disabled={type.unavailable}
                className={({ selected }) =>
                  combineClassNames(
                    'py-2.5 px-2 sm:px-4 md:px-5 lg:px-6 -mb-0.5 border-b-2 border-transparent text-sm leading-5 font-medium ',
                    'focus:outline-none',
                    selected
                      ? 'border-blue-600 text-blue-800'
                      : 'text-gray-400 border-transparent hover:border-gray-400 hover:text-gray-500'
                  )
                }
              >
                {type}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className='w-full mt-2'>
            {Object.keys(types).map((type, idx) => (
              <Tab.Panel
                key={idx}
                className={combineClassNames(
                  'bg-white rounded-xl p-3',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                )}
              >
                <h3 className='text-xl font-bold'>{type}</h3>
                <ol>
                  {Object.keys(types[type]).map((appearance) => (
                    <li key={appearance}>{appearance}</li>
                  ))}
                </ol>
                {/* <ul>
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className='relative p-3 rounded-md hover:bg-coolGray-100'
                    >
                      <h3 className='text-sm font-medium leading-5'>
                        {post.title}
                      </h3>

                      <ul className='flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500'>
                        <li>{post.date}</li>
                        <li>&middot;</li>
                        <li>{post.commentCount} comments</li>
                        <li>&middot;</li>
                        <li>{post.shareCount} shares</li>
                      </ul>

                      <a
                        href='#'
                        className={classNames(
                          'absolute inset-0 rounded-md',
                          'focus:z-10 focus:outline-none focus:ring-2 ring-blue-400'
                        )}
                      />
                    </li>
                  ))}
                </ul> */}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>

      {/* <div className='flex mt-12'>
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
      )} */}
    </div>
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
