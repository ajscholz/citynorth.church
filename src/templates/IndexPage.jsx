import * as React from 'react'

import IndexHero from '../components/layout/IndexHero'

import { graphql } from 'gatsby'

const IndexPageTemplate = ({ data }) => {
  const { page } = data

  return <IndexHero banner={page.banner} />
}

export default IndexPageTemplate

export const query = graphql`
  query ($slug: String!) {
    page: contentfulPage(slug: { eq: $slug }) {
      title
      banner {
        image {
          gatsbyImageData
        }
        heroText
      }
    }
  }
`
