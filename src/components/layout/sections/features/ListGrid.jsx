import React from 'react'
// import PropTypes from 'prop-types'

import { CheckIcon } from '@heroicons/react/outline'

import { setupFeatures } from '.'
import ContentfulRichText from '../../../ContentfulRichText'
import ContentWarning from '../../../interactive/ContentWarning'

const ListGrid = ({ sectionData }) => {
  const { id, name, contentBlocks, title, body } = sectionData
  const min = 4
  const max = 8
  const sectionFeatures = setupFeatures(
    contentBlocks,
    contentBlocks.length >= max ? max : min
  )

  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center'>
          {process.env.NODE_ENV === 'development' && (
            <h2 className='text-3xl font-extrabold text-gray-900'>{title}</h2>
          )}
          <p className='mt-4 text-lg text-gray-500'>
            <ContentfulRichText rawRichText={body} />
          </p>
        </div>
        {contentBlocks.length >= min ? (
          <dl className='mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8'>
            {sectionFeatures.map((feature) => (
              <div key={feature.primaryText} className='relative'>
                <dt>
                  <CheckIcon
                    className='absolute h-6 w-6 text-blue-400'
                    aria-hidden='true'
                  />
                  <p className='ml-9 text-lg leading-6 font-medium text-gray-900'>
                    {feature.primaryText}
                  </p>
                </dt>
                {feature.body ? (
                  <dd className='mt-2 ml-9 text-base text-gray-500'>
                    <ContentfulRichText rawRichText={feature.body} />
                  </dd>
                ) : (
                  <ContentWarning
                    id={feature.id}
                    contentName={feature.name}
                    fieldName='BODY'
                  />
                )}
              </div>
            ))}
          </dl>
        ) : (
          <div className='mt-10'>
            <ContentWarning
              message='Please link a minimum of 4'
              contentName={name}
              fieldName='CONTENT BLOCKS'
              id={id}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default ListGrid
