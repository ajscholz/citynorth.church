import React from 'react'
import PropTypes from 'prop-types'

import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { getFocalPoint } from '../utils/functions'

const FocalPointImage = ({ imageData, ...rest }) => {
  const { title, description, focalPoint, image } = imageData

  const fp = getFocalPoint(image, focalPoint)

  return (
    <GatsbyImage
      title={title}
      image={image.gatsbyImageData}
      alt={description}
      {...rest}
      objectPosition={fp}
    />
  )
}

FocalPointImage.propTypes = {
  imageData: PropTypes.object.isRequired,
}

export default FocalPointImage

export const query = graphql`
  fragment imageFragment on ContentfulImage {
    title
    description
    image {
      file {
        details {
          image {
            height
            width
          }
        }
      }
      gatsbyImageData
    }
    focalPoint {
      focalPoint {
        x
        y
      }
    }
  }
`
