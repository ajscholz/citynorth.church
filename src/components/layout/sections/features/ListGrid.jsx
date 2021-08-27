import React from 'react'
import PropTypes from 'prop-types'

import { CheckIcon } from '@heroicons/react/outline'

import { setupFeatures } from '.'
import ContentfulRichText from '../../../ContentfulRichText'

const ListGrid = ({ sectionData }) => {
  const { contentBlocks, title, body } = sectionData
  const sectionFeatures = setupFeatures(contentBlocks, 8)

  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-3xl font-extrabold text-gray-900'>{title}</h2>
          <p className='mt-4 text-lg text-gray-500'>
            <ContentfulRichText rawRichText={body} />
          </p>
        </div>
        <dl className='mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8'>
          {sectionFeatures.map((feature) => (
            <div key={feature.primaryText} className='relative'>
              <dt>
                <CheckIcon
                  className='absolute h-6 w-6 text-green-500'
                  aria-hidden='true'
                />
                <p className='ml-9 text-lg leading-6 font-medium text-gray-900'>
                  {feature.primaryText}
                </p>
              </dt>
              <dd className='mt-2 ml-9 text-base text-gray-500'>
                <ContentfulRichText rawRichText={feature.body} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

ListGrid.propTypes = {
  sectionData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.any.isRequired,
    contentBlocks: PropTypes.arrayOf(
      PropTypes.shape({
        primaryText: PropTypes.string.isRequired,
        body: PropTypes.any.isRequied,
      }).isRequired
    ).isRequired,
  }).isRequired,
}

export default ListGrid
