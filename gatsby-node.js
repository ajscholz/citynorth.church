exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  // create an index-specific layout for a different hero
  if (page.path.match(/^\/$/)) {
    page.context.layout = 'index'
  } else if (page.path.includes('404')) {
    page.context.layout = 'error'
  } else {
    page.context.layout = 'standard'
  }

  createPage(page)
}
