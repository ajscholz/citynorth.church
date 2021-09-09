import React from 'react'
import Link from '../../../interactive/Link'

import { processTitle, combineClassNames } from '../../../../utils/functions'

const SimpleCentered = ({ sectionData }) => {
  const { title, contentBlocks } = sectionData

  const titleArray = processTitle(title)

  const buttons = [...contentBlocks][0].callToAction.slice(0, 2)

  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
        <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
          {titleArray.map((item) => (
            <span key={item} className='block'>
              {item}
            </span>
          ))}
        </h2>
        <div className='mt-8 flex justify-center space-x-4'>
          {buttons.map((button, i) => (
            <div key={button.id} className='inline-flex rounded-md shadow'>
              <Link
                to={button.url}
                className={combineClassNames(
                  i === 0
                    ? 'text-blue-50 bg-blue-600 hover:bg-blue-700'
                    : 'text-blue-700 bg-blue-100 hover:bg-blue-200',
                  'inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md'
                )}
              >
                {button.text}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SimpleCentered
