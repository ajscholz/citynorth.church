import React from 'react'
import PropTypes from 'prop-types'

import { setupFeatures } from '.'
import ContentfulRichText from '../../../ContentfulRichText'
import Heroicon from '../../../Heroicon'
import ContentWarning from '../../../interactive/ContentWarning'

const ThreeColSimple = ({ sectionData }) => {
  const { contentBlocks, title } = sectionData
  const sectionFeatures = setupFeatures(contentBlocks, 3)

  return (
    <div className='py-12 bg-white'>
      <div className='max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 className='sr-only'>{title}</h2>
        <dl className='space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8'>
          {sectionFeatures.map((feature) => (
            <div key={feature.name}>
              <dt>
                <div className='flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white'>
                  <Heroicon
                    icon={feature.icon}
                    className='h-6 w-6'
                    aria-hidden='true'
                  />
                </div>
                <p className='mt-5 text-lg leading-6 font-medium text-gray-900'>
                  {feature.name}
                </p>
              </dt>
              {feature.body ? (
                <dd className='mt-2 text-base text-gray-500'>
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
      </div>
    </div>
  )
}

ThreeColSimple.propTypes = {
  sectionData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequied,
        icon: PropTypes.func.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
}

export default ThreeColSimple
