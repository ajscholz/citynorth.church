import React from 'react'
import PropTypes from 'prop-types'

import { graphql } from 'gatsby'

const StandardPage = ({ data }) => {
  const { page } = data

  return (
    <div>
      <h1>{page.title}</h1>
    </div>
  )
}

StandardPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default StandardPage

export const query = graphql`
  query ($slug: String!) {
    page: contentfulPage(slug: { eq: $slug }) {
      title
    }
  }
`
