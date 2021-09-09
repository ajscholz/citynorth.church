import React from 'react'
import { CheckIcon } from '@heroicons/react/outline'

import { setupFeatures } from '.'
import ContentfulRichText from '../../../ContentfulRichText'
import ContentWarning from '../../../interactive/ContentWarning'

const List = ({ sectionData }) => {
  const { id, name, contentBlocks, subtitle, title, body } = sectionData

  const sectionFeatures = setupFeatures(contentBlocks, 8)

  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8'>
        <div>
          {subtitle && (
            <p className='text-base font-semibold text-blue-600 uppercase tracking-wide'>
              {subtitle}
            </p>
          )}
          <h2 className='mt-2 text-3xl font-extrabold text-gray-900'>
            {title}
          </h2>
          {body ? (
            <p className='mt-4 text-lg text-gray-500'>
              <ContentfulRichText rawRichText={body} />
            </p>
          ) : (
            <ContentWarning id={id} contentName={name} fieldName='BODY' />
          )}
        </div>
        <div className='mt-12 lg:mt-0 lg:col-span-2'>
          <dl className='space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8'>
            {sectionFeatures.map((feature) => (
              <div key={feature.id} className='relative'>
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
        </div>
      </div>
    </div>
  )
}

export default List
