import React from 'react'
import PropTypes from 'prop-types'

import { CheckIcon } from '@heroicons/react/outline'

import { setupFeatures } from './'

const ListGrid = ({ sectionData }) => {
  const { features, title, description } = sectionData
  // copy features, otherwise it changes the array in other components
  const sectionFeatures = setupFeatures(features, 8)

  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-3xl font-extrabold text-gray-900'>{title}</h2>
          <p className='mt-4 text-lg text-gray-500'>{description}</p>
        </div>
        <dl className='mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8'>
          {sectionFeatures.map((feature) => (
            <div key={feature.name} className='relative'>
              <dt>
                <CheckIcon
                  className='absolute h-6 w-6 text-green-500'
                  aria-hidden='true'
                />
                <p className='ml-9 text-lg leading-6 font-medium text-gray-900'>
                  {feature.name}
                </p>
              </dt>
              <dd className='mt-2 ml-9 text-base text-gray-500'>
                {feature.description}
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
    description: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequied,
      }).isRequired
    ).isRequired,
  }).isRequired,
}

export default ListGrid
