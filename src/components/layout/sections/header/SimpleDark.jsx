import React from 'react'

import ContentfulRichText from '../../../ContentfulRichText'
import ContentWarning from '../../../interactive/ContentWarning'

const SimpleDark = ({ sectionData }) => {
  const { title, subtitle, body, name } = sectionData
  return (
    <div className='bg-gray-800'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <p className='text-base font-semibold text-lightBlue-500 tracking-wide uppercase'>
            {subtitle}
          </p>
          <h2 className='mt-1 text-4xl font-extrabold text-gray-50 sm:text-5xl sm:tracking-tight lg:text-6xl'>
            {title}
          </h2>
          {body ? (
            <p className='max-w-xl mt-5 mx-auto text-xl text-gray-300'>
              <ContentfulRichText rawRichText={body} />
            </p>
          ) : (
            <ContentWarning contentName={name} fieldName='BODY' />
          )}
        </div>
      </div>
    </div>
  )
}

export default SimpleDark
