import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import FocalPointImage from '../FocalPointImage'

const Header = ({ bannerQueryData }) => {
  const { primaryText, images } = bannerQueryData
  const image = images ? images[0] : null

  return (
    <div className='relative bg-gray-800'>
      <div className='absolute inset-0'>
        {images && (
          <FocalPointImage
            imageData={image}
            imgClassName='w-full h-full'
            className='absolute inset-0 h-full'
          />
        )}

        <div
          className='absolute inset-0 bg-gray-500 mix-blend-multiply'
          aria-hidden='true'
        />
      </div>
      <div className='relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
        <h1 className='text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl'>
          {primaryText}
        </h1>
        {/* <p className='mt-6 text-xl text-indigo-100 max-w-3xl'>
          Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque
          lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut
          consectetur. Sit justo viverra non adipisicing elit distinctio.
        </p> */}
      </div>
    </div>
  )
}

Header.propTypes = {
  bannerQuery: PropTypes.object.isRequired,
}

Header.defaultProps = {
  bannerQuery: {
    primaryText: 'Default header text',
  },
}

export default Header

export const query = graphql`
  fragment bannerFragment on ContentfulContent {
    primaryText
    secondaryText
    images {
      ...imageFragment
    }
  }
`
