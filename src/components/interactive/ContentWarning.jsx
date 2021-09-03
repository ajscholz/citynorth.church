import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import { ExclamationIcon } from '@heroicons/react/solid'

const useRefDimensions = (ref) => {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    if (ref.current) {
      setWidth(Math.round(ref.current.getBoundingClientRect().width))
    }
  }, [ref])

  useEffect(() => {
    const handleResize = () => {
      setWidth(Math.round(ref.current.getBoundingClientRect().width))
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [ref, setWidth])

  return width
}

const ContentWarning = ({ id, fieldName, contentName, message }) => {
  const ref = useRef()
  const [show, setShow] = useState(false)
  const width = useRefDimensions(ref)

  // only display warnings if in development or in preview mode
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' || process.env.GATSBY_IS_PREVIEW)
      setShow(true)
  }, [])

  return show ? (
    <>
      <div className='bg-yellow-50 border-l-4 border-yellow-400 p-4' ref={ref}>
        <div className='flex'>
          <div className='flex-shrink-0'>
            <ExclamationIcon
              className='h-5 w-5 text-yellow-400'
              aria-hidden='true'
            />
          </div>
          <div
            className={`ml-3 flex-1 ${width >= 660 && 'flex justify-between'}`}
          >
            <p className='text-sm text-yellow-700'>
              {message.trim().concat(' ')}
              <span className='font-bold'>{fieldName}</span>
              {` field in
              `}
              <span className='font-bold'>{contentName}</span>
            </p>
            <p className={` text-sm ${width <= 660 ? 'mt-3' : 'mt-0 ml-6'}`}>
              <a
                href={`https://app.contentful.com/spaces/${process.env.GATSBY_CONTENTFUL_SPACE_ID}/entries/${id}`}
                className='whitespace-nowrap font-medium text-yellow-700 hover:text-yellow-600'
                alt='Go to content in Contentful'
                target='_blank'
              >
                Edit Content <span aria-hidden='true'>&rarr;</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  ) : null
}

ContentWarning.propTypes = {
  id: PropTypes.string.isRequired,
  contentName: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
}

ContentWarning.defaultProps = {
  message: 'Please complete the',
}

export default ContentWarning
