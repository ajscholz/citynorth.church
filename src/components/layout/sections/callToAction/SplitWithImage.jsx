import React from 'react'
import Link from '../../../interactive/Link'

import { ExternalLinkIcon } from '@heroicons/react/outline'
import ContentfulRichText from '../../../ContentfulRichText'

const SplitWithImage = ({ sectionData }) => {
  const { title, subtitle, body, contentBlocks } = sectionData

  const button = [...contentBlocks][0].callToAction[0]

  return (
    <div className='relative bg-gray-800'>
      <div className='h-56 bg-blue-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2'>
        <img
          className='w-full h-full object-cover'
          src='https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1'
          alt=''
        />
      </div>
      <div className='relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
        <div className='md:ml-auto md:w-1/2 md:pl-10'>
          {subtitle && (
            <p className='text-base font-semibold uppercase tracking-wider text-gray-300'>
              {subtitle}
            </p>
          )}
          <h2 className='mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl'>
            {title}
          </h2>
          {body && (
            <p className='mt-3 text-lg text-gray-300'>
              <ContentfulRichText rawRichText={body} />
            </p>
          )}
          <div className='mt-8'>
            <div className='inline-flex rounded-md shadow'>
              <Link
                to={button.url}
                className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50'
              >
                {button.text}
                <ExternalLinkIcon
                  className='-mr-1 ml-3 h-5 w-5 text-gray-400'
                  aria-hidden='true'
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SplitWithImage
