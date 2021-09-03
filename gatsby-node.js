exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type ContentfulSection implements Node {
      name: String
      title: String
      subtitle: String
    }
  `
  createTypes(typeDefs)
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  // create an index-specific layout for a different hero
  if (page.path.includes('404')) {
    page.context.layout = 'error'
  }

  createPage(page)
}

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allContentfulPage {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.allContentfulPage.edges.forEach(({ node }) => {
    const slug = node.slug

    const attrs =
      slug === '/'
        ? {
            component: require.resolve('./src/templates/IndexPage.jsx'),
            context: { slug: slug, layout: 'standard' },
          }
        : {
            component: require.resolve('./src/templates/StandardPage.jsx'),
            context: { slug: slug, layout: 'standard' },
          }

    actions.createPage({
      path: slug,
      ...attrs,
    })
  })
}
