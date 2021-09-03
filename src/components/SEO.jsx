import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ title, description, image, slug, index }) => {
  const data = useStaticQuery(graphql`
    query {
      site: contentfulChurchInformation {
        name
        siteUrl
        description: seoDefaultDescription {
          text: seoDefaultDescription
        }
        icon {
          file {
            url
          }
        }
      }
    }
  `)

  const { site } = data

  return (
    <Helmet htmlAttributes={{ lang: `en` }} titleTemplate={`%s • ${site.name}`}>
      <title>{title}</title>
      <meta name='description' content={description || site.description.text} />
      {!index && <meta name='robots' content='none' />}
      <link rel='canonical' href={`${site.siteUrl}${slug}`} />
      <link rel='shortcut icon' href={`https:${site.icon.file.url}`} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='og:title' content={title} />
      <meta
        name='og:description'
        content={description || site.description.text}
      />
      <meta name='og:image' content={`${image || ''}`} />
      <meta name='og:type' content='website' />
      <meta name='og:url' content={`${site.siteUrl}/${slug}`} />
      <meta name='og:site_name' content={site.title} />
    </Helmet>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  slug: PropTypes.string,
  index: PropTypes.bool.isRequired,
}

SEO.defaultProps = {
  index: true,
}

export default SEO
