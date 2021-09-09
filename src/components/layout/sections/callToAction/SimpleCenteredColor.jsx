import React from 'react'
import ContentfulRichText from '../../../ContentfulRichText'
import Link from '../../../interactive/Link'

import { processTitle, combineClassNames } from '../../../../utils/functions'

const SimpleCenteredColor = ({ sectionData }) => {
  const { title, body, contentBlocks } = sectionData

  const titleArray = processTitle(title)

  const buttons = [...contentBlocks][0].callToAction.slice(0, 1)

  return (
    <div className='bg-blue-800'>
      <div className='max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-extrabold text-white sm:text-4xl'>
          {titleArray.map((item) => (
            <span key={item} className='block'>
              {item}
            </span>
          ))}
        </h2>
        {body && (
          <p className='mt-4 text-lg leading-6 text-blue-200'>
            <ContentfulRichText rawRichText={body} />
          </p>
        )}
        <div className='space-x-5'>
          {buttons.map((button, i) => (
            <Link
              to={button.url}
              className={combineClassNames(
                i === 0
                  ? 'text-blue-600 bg-white hover:bg-blue-100'
                  : 'text-blue-700 bg-blue-200 hover:bg-blue-300',
                'mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md sm:w-auto'
              )}
            >
              {button.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SimpleCenteredColor
