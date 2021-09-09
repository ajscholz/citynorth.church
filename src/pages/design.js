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
  Features: { appearances: FEATURE_APPEARANCES, current: false },
  FAQ: { appearances: FAQ_APPEARANCES, current: false },
  'Call To Action': { appearances: CTA_APPEARANCES, current: false },
  Header: { appearances: HEADER_APPEARANCES, current: false },
  Story: { appearances: STORY_APPEARANCES, current: false },
  Team: { appearances: TEAM_APPEARANCES, current: false },
}

const Design = () => {
  const [state, setState] = useState({
    look: null,
    selected: { type: null, appearance: null },
  })

  const handleUpdate = (component, type, appearance) => {
    setState({
      look: component({
        ...defaultFeaturesData,
        title: `${appearance} Section`,
      }),
      selected: { type: type, appearance: appearance },
    })
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
          <div className='flex flex-col flex-none w-64 pt-5 pb-4 bg-blue-500 overflow-y-auto'>
            <div className='flex-grow flex flex-col'>
              <nav
                className='flex-1 px-2 space-y-1 bg-blue-500'
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
                                ? 'bg-blue-700 text-blue-50'
                                : 'bg-blue-500 text-blue-50 hover:bg-blue-400 hover:text-white',
                              'group w-full flex items-center pr-2 py-2 text-left text-md font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                            )}
                          >
                            <svg
                              className={combineClassNames(
                                open && 'rotate-90',
                                'mr-2 flex-shrink-0 h-5 w-5 transform text-white'
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
                          <Disclosure.Panel className='space-y-2 mb-6'>
                            {Object.keys(item.appearances).map((appearance) => {
                              const component = item.appearances[appearance]

                              return (
                                <button
                                  key={appearance}
                                  className={combineClassNames(
                                    type === state.selected.type &&
                                      appearance === state.selected.appearance
                                      ? 'bg-blue-700 text-blue-100'
                                      : 'bg-blue-500 text-blue-100 hover:bg-blue-400 hover:text-blue-50',
                                    'group w-full flex items-center pl-10 pr-2 py-2 text-sm text-left font-regular text-blue-100 rounded-md hover:text-blue-50 hover:bg-blue-400'
                                  )}
                                  onClick={() =>
                                    handleUpdate(component, type, appearance)
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

          <div className='flex-1 bg-gray-100'>{state.look}</div>
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
  subtitle: 'Section Subtitle',
  body: {
    raw: '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Section body text. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate eum facere pariatur sunt deleniti quidem!","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}',
  },
  sectionTypeAppearance: {
    section: 'Features',
    appearance: 'List Grid',
  },
  contentBlocks: [
    {
      id: '1qnHG0VVk23qfjvZj1b32w',
      name: 'Content Block 1',
      primaryText: 'Content Block Primary Text',
      secondaryText: 'Content Block Secondary Text',
      icon: 'academic-cap',
      body: {
        raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"Content block body text. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate eum facere pariatur sunt deleniti quidem!","marks":[],"data":{}}],"data":{}}]}',
      },
    },
    {
      id: '324ihjwefd80s98h',
      name: 'Content Block 2',
      primaryText: 'Content Block Primary Text',
      secondaryText: 'Content Block Secondary Text',
      icon: 'academic-cap',
      body: {
        raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"Content block body text. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate eum facere pariatur sunt deleniti quidem!","marks":[],"data":{}}],"data":{}}]}',
      },
    },
    {
      id: 'cvnsjidlfjkl234',
      name: 'Content Block 3',
      primaryText: 'Content Block Primary Text',
      secondaryText: 'Content Block Secondary Text',
      icon: 'academic-cap',
      body: {
        raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"Content block body text. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate eum facere pariatur sunt deleniti quidem!","marks":[],"data":{}}],"data":{}}]}',
      },
    },
    {
      id: 'ihup23h098wyqh',
      name: 'Content Block 4',
      primaryText: 'Content Block Primary Text',
      secondaryText: 'Content Block Secondary Text',
      icon: 'academic-cap',
      body: {
        raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"Content block body text. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate eum facere pariatur sunt deleniti quidem!","marks":[],"data":{}}],"data":{}}]}',
      },
    },
    {
      id: '2j38sdfln23jewf;m',
      name: 'Content Block 5',
      primaryText: 'Content Block Primary Text',
      secondaryText: 'Content Block Secondary Text',
      icon: 'academic-cap',
      body: {
        raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"Content block body text. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate eum facere pariatur sunt deleniti quidem!","marks":[],"data":{}}],"data":{}}]}',
      },
    },
    {
      id: '234iuwehjnfksdm',
      name: 'Content Block 6',
      primaryText: 'Content Block Primary Text',
      secondaryText: 'Content Block Secondary Text',
      icon: 'academic-cap',
      body: {
        raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"Content block body text. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate eum facere pariatur sunt deleniti quidem!","marks":[],"data":{}}],"data":{}}]}',
      },
    },
    {
      id: 'ilhwjsnkldfj08923y42p9wuehrf',
      name: 'Content Block 7',
      primaryText: 'Content Block Primary Text',
      secondaryText: 'Content Block Secondary Text',
      icon: 'academic-cap',
      body: {
        raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"Content block body text. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate eum facere pariatur sunt deleniti quidem!","marks":[],"data":{}}],"data":{}}]}',
      },
    },
    {
      id: '12870894738274032',
      name: 'Content Block 8',
      primaryText: 'Content Block Primary Text',
      secondaryText: 'Content Block Secondary Text',
      icon: 'academic-cap',
      body: {
        raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","content":[{"nodeType":"text","value":"Content block body text. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate eum facere pariatur sunt deleniti quidem!","marks":[],"data":{}}],"data":{}}]}',
      },
    },
  ],
}
