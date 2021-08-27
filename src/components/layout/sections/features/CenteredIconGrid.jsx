import React from 'react'
import PropTypes from 'prop-types'

import { setupFeatures } from '.'
import Heroicon from '../../../Heroicon'
import ContentfulRichText from '../../../ContentfulRichText'

const CenteredIconGrid = ({ sectionData }) => {
  const { contentBlocks, title, subtitle, body } = sectionData
  const sectionFeatures = setupFeatures(contentBlocks, 4)

  return (
    <div className='py-12 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='lg:text-center'>
          <p className='text-base text-blue-600 font-semibold tracking-wide uppercase'>
            {subtitle}
          </p>
          <h2 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            {title}
          </h2>
          <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
            <ContentfulRichText rawRichText={body} />
          </p>
        </div>

        <div className='mt-10'>
          <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10'>
            {sectionFeatures.map((feature) => (
              <div key={feature.primaryText} className='relative'>
                <dt>
                  <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white'>
                    <Heroicon
                      icon={feature.icon}
                      className='h-6 w-6'
                      aria-hidden='true'
                    />
                  </div>
                  <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                    {feature.primaryText}
                  </p>
                </dt>
                <dd className='mt-2 ml-16 text-base text-gray-500'>
                  <ContentfulRichText rawRichText={feature.body} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

CenteredIconGrid.propTypes = {
  sectionData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    body: PropTypes.any.isRequired,
    contentBlocks: PropTypes.arrayOf(
      PropTypes.shape({
        primaryText: PropTypes.string.isRequired,
        body: PropTypes.any.isRequied,
        icon: PropTypes.func.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
}

export default CenteredIconGrid
