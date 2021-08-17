exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  // create an index-specific layout for a different hero
  if (page.path.match(/^\/$/)) {
    page.context.layout = 'index'
    createPage(page)
  } else if (page.path.includes('404')) {
    page.context.layout = 'error'
    createPage(page)
  }
}
