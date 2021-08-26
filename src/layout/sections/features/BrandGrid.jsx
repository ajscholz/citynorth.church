import React from 'react'
import PropTypes from 'prop-types'

import { setupFeatures } from './'

const BrandGrid = ({ sectionData }) => {
  const { features, title, description } = sectionData
  const sectionFeatures = setupFeatures(features, 8)

  return (
    <div className='bg-blue-800'>
      <div className='max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8'>
        <h2 className='text-3xl font-extrabold text-blue-50 tracking-tight'>
          {title}
        </h2>
        <p className='mt-4 max-w-3xl text-lg text-blue-200'>{description}</p>
        <div className='mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16'>
          {sectionFeatures.map((feature) => (
            <div key={feature.name}>
              <div>
                <span className='flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10'>
                  <feature.icon
                    className='h-6 w-6 text-white'
                    aria-hidden='true'
                  />
                </span>
              </div>
              <div className='mt-6'>
                <h3 className='text-lg font-medium text-blue-50'>
                  {feature.name}
                </h3>
                <p className='mt-2 text-base text-blue-200'>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

BrandGrid.propTypes = {
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

export default BrandGrid
