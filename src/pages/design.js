import React, { useState } from 'react'

import { Disclosure } from '@headlessui/react'

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

import { combineClassNames } from '../utils/functions'

const types = {
  Features: { appearances: FEATURE_APPEARANCES, current: true },
  FAQ: { appearances: FAQ_APPEARANCES, current: false },
  'Call To Action': { appearances: CTA_APPEARANCES, current: false },
  Header: { appearances: HEADER_APPEARANCES, current: false },
  Story: { appearances: STORY_APPEARANCES, current: false },
  Team: { appearances: TEAM_APPEARANCES, current: false },
}

const Design = () => {
  const [look, setLook] = useState(null)

  const handleUpdate = (component, appearance) => {
    console.log('appearance', appearance)
    setLook(component({ ...defaultFeaturesData }))
  }

  return (
    <>
      <SEO index={false} />

      <div className='flex flex-col min-h-screen'>
        <header className='bg-gray-800 w-full'>
          <div className='flex justify-end py-8 px-6 md:px-12  text-gray-50'>
            <h2 className='flex-none text-2xl lg:text-4xl font-bold'>
              Design Page
            </h2>
            {/* <p className='flex-initial mt-6 text-gray-100 text-sm'>
              Use this page to view design options available to you. Browse by
              section type, then select a layout. You'll be able to to see what
              that specific section appearance will look like with dummy data,
              and you'll see different parameters for that section and
              appearance.
            </p> */}
          </div>
        </header>

        <div className='flex flex-grow min-h-full'>
          <div className='flex flex-col flex-none border-r border-gray-200 w-64 pt-5 pb-4 bg-white overflow-y-auto'>
            <div className='flex-grow flex flex-col'>
              <nav
                className='flex-1 px-2 space-y-1 bg-white'
                aria-label='Sidebar'
              >
                {Object.keys(types).map((type) => {
                  const item = types[type]

                  return (
                    <Disclosure as='div' key={type} className='space-y-1'>
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={combineClassNames(
                              item.current
                                ? 'bg-gray-100 text-gray-900'
                                : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                              'group w-full flex items-center pr-2 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                            )}
                          >
                            <svg
                              className={combineClassNames(
                                open
                                  ? 'text-gray-400 rotate-90'
                                  : 'text-gray-300',
                                'mr-2 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150'
                              )}
                              viewBox='0 0 20 20'
                              aria-hidden='true'
                            >
                              <path
                                d='M6 6L14 10L6 14V6Z'
                                fill='currentColor'
                              />
                            </svg>
                            {type}
                          </Disclosure.Button>
                          <Disclosure.Panel className='space-y-1'>
                            {Object.keys(item.appearances).map((appearance) => {
                              const component = item.appearances[appearance]

                              return (
                                <button
                                  key={appearance}
                                  className='group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50'
                                  onClick={() =>
                                    handleUpdate(component, appearance)
                                  }
                                >
                                  {appearance}
                                </button>
                              )
                            })}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  )
                })}
              </nav>
            </div>
          </div>

          <div className='flex-1 bg-gray-200'>{look}</div>
        </div>
      </div>
    </>
  )
}

export default Design

const defaultFeaturesData = {
  id: '82jdls9c23k0',
  name: 'Default Section',
  title: 'Default Section',
  subtitle: 'Default Subtitle',
  body: {
    raw: '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Will this update correctly?","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}',
  },
  sectionTypeAppearance: {
    section: 'Features',
    appearance: 'List Grid',
  },
  contentBlocks: [
    {
      id: '1qnHG0VVk23qfjvZj1b32w',
      name: "Here's One!",
      primaryText: 'Content Block 1',
      secondaryText: null,
      body: {
        raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate eum facere pariatur sunt deleniti quidem! And more words.","marks":[],"data":{}}],"data":{}}]}',
      },
    },
    {
      id: '1qnHG0VVk23qfjvZj1b32w',
      name: "Here's TWo!",
      primaryText: 'Content Block 2',
      secondaryText: null,
      body: {
        raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate eum facere pariatur sunt deleniti quidem! And more words.","marks":[],"data":{}}],"data":{}}]}',
      },
    },
    {
      id: '1qnHG0VVk23qfjvZj1b32w',
      name: "Here's One!",
      primaryText: 'Content Block 3',
      secondaryText: null,
      body: {
        raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate eum facere pariatur sunt deleniti quidem! And more words.","marks":[],"data":{}}],"data":{}}]}',
      },
    },
    {
      id: '1qnHG0VVk23qfjvZj1b32w',
      name: "Here's One!",
      primaryText: 'Content Block 4',
      secondaryText: null,
      body: {
        raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate eum facere pariatur sunt deleniti quidem! And more words.","marks":[],"data":{}}],"data":{}}]}',
      },
    },
  ],
}
