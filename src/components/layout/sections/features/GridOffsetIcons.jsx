import React from 'react'

import { setupFeatures } from '.'
import ContentfulRichText from '../../../ContentfulRichText'
import Heroicon from '../../../Heroicon'
import ContentWarning from '../../../interactive/ContentWarning'

const GridOffsetIcons = ({ sectionData }) => {
  const { title, subtitle, body, contentBlocks } = sectionData
  const min = 3
  const max = 6
  const sectionFeatures = setupFeatures(
    contentBlocks,
    contentBlocks.length >= max ? max : min
  )

  return (
    <div className='relative bg-white py-16 sm:py-24 lg:py-32'>
      <div className='mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl'>
        <h3 className='text-base font-semibold tracking-wider text-blue-600 uppercase'>
          {subtitle}
        </h3>
        <h2 className='mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl'>
          {title}
        </h2>
        {body && (
          <p className='mt-5 max-w-prose mx-auto text-xl text-gray-500'>
            <ContentfulRichText rawRichText={body} />
          </p>
        )}
        <div className='mt-12'>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {sectionFeatures.map((feature) => (
              <div key={feature.id} className='pt-6'>
                <div className='flow-root bg-lightBlue-100 rounded-lg px-6 pb-8'>
                  <div className='-mt-6'>
                    <div>
                      <span className='inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg'>
                        <Heroicon
                          icon={feature.icon}
                          className='h-6 w-6 text-blue-50'
                          aria-hidden='true'
                        />
                      </span>
                    </div>
                    <h3 className='mt-8 text-lg font-medium text-gray-900 tracking-tight'>
                      {feature.primaryText}
                    </h3>
                    {feature.body ? (
                      <p className='mt-5 text-base text-gray-500'>
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
