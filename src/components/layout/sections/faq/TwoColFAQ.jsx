import React from 'react'

import ContentfulRichText from '../../../ContentfulRichText'
import ContentWarning from '../../../interactive/ContentWarning'

const TwoColFAQ = ({ sectionData }) => {
  const { title, body, contentBlocks } = sectionData

  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
        <div className='max-w-2xl lg:mx-auto lg:text-center'>
          <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            {title}
          </h2>
          {body && (
            <p className='mt-4 text-gray-500'>
              <ContentfulRichText rawRichText={body} />
            </p>
          )}
        </div>
        <div className='mt-20'>
          <dl className='space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10'>
            {contentBlocks.map((faq) => (
              <div key={faq.id}>
                <dt className='font-semibold text-gray-900'>
                  {faq.primaryText}
                </dt>
                {faq.body ? (
                  <dd className='mt-3 text-gray-500'>
                    <ContentfulRichText rawRichText={faq.body} />
                  </dd>
                ) : (
                  <ContentWarning
                    id={faq.id}
                    contentName={faq.name}
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

export default TwoColFAQ
