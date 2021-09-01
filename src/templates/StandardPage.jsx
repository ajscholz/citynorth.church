import React from 'react'
import PropTypes from 'prop-types'

import { graphql } from 'gatsby'
import Header from '../components/layout/Header'

const StandardPage = ({ data }) => {
  const { page } = data
  const { banner } = page

  return (
    <>
      <Header bannerQueryData={banner} />
    </>
  )
}

StandardPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default StandardPage

export const query = graphql`
  query ($slug: String!) {
    page: contentfulPage(slug: { eq: $slug }) {
      banner {
        ...bannerFragment
      }
    }
  }
`
