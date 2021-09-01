import * as React from 'react'

import IndexHero from '../components/layout/IndexHero'

import { graphql } from 'gatsby'

const IndexPageTemplate = ({ data }) => {
  const { page } = data
  const { banner } = page

  return <IndexHero bannerQueryData={banner} />
}

export default IndexPageTemplate

export const query = graphql`
  query ($slug: String!) {
    page: contentfulPage(slug: { eq: $slug }) {
      banner {
        ...bannerFragment
      }
    }
  }
`
