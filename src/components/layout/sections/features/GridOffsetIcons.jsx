import React from 'react'

import { setupFeatures } from '.'

const GridOffsetIcons = ({ sectionData }) => {
  const { title, subtitle, body, contentBlocks } = sectionData
  const sectionFeatures = setupFeatures(contentBlocks, 6)

  return (
    <div className='relative bg-white py-16 sm:py-24 lg:py-32'>
      <div className='mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl'>
        <h3 className='text-base font-semibold tracking-wider text-blue-600 uppercase'>
          {subtitle}
        </h3>
        <h2 className='mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl'>
          {title}
        </h2>
        <p className='mt-5 max-w-prose mx-auto text-xl text-gray-500'>
          {body.raw}
        </p>
        <div className='mt-12'>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {sectionFeatures.map((block) => (
              <div key={block.id} className='pt-6'>
                <div className='flow-root bg-lightBlue-100 rounded-lg px-6 pb-8'>
                  <div className='-mt-6'>
                    <div>
                      <span className='inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg'>
                        <block.icon
                          className='h-6 w-6 text-white'
                          aria-hidden='true'
                        />
                      </span>
                    </div>
                    <h3 className='mt-8 text-lg font-medium text-gray-900 tracking-tight'>
                      {block.primaryText}
                    </h3>
                    <p className='mt-5 text-base text-gray-500'>
                      {block.body.raw}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

GridOffsetIcons.propTypes = {}

export default GridOffsetIcons
