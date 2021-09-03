import React from 'react'

import { setupFeatures } from '.'
import ContentfulRichText from '../../../ContentfulRichText'
import Heroicon from '../../../Heroicon'
import ContentWarning from '../../../interactive/ContentWarning'

const BrandGrid = ({ sectionData }) => {
  const { contentBlocks, title, body } = sectionData
  const sectionFeatures = setupFeatures(contentBlocks, 8)

  return (
    <div className='bg-blue-800'>
      <div className='max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8'>
        <h2 className='text-3xl font-extrabold text-white tracking-tight'>
          {title}
        </h2>
        {body && (
          <p className='mt-4 max-w-3xl text-lg text-blue-100'>
            <ContentfulRichText rawRichText={body} />
          </p>
        )}
        <div className='mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16'>
          {sectionFeatures.map((feature) => (
            <div key={feature.name}>
              <div>
                <span className='flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10'>
                  <Heroicon
                    icon={feature.icon}
                    className='h-6 w-6 text-blue-50'
                    aria-hidden='true'
                  />
                </span>
              </div>
              <div className='mt-6'>
                <h3 className='text-lg font-medium text-blue-50'>
                  {feature.primaryText}
                </h3>
                {feature.body ? (
                  <p className='mt-2 text-base text-blue-200'>
                    <ContentfulRichText rawRichText={feature.body} />
                  </p>
                ) : (
                  <ContentWarning
                    id={feature.id}
                    contentName={feature.name}
                    fieldName='BODY'
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BrandGrid
