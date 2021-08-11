import React from 'react'

const Layout = ({ children, pageContext }) => {
  if (pageContext.layout === 'index') {
    return <IndexLayout>{children}</IndexLayout>
  }
  return (
    <div>
      <div>here's a header!</div>
      {children}
      <div>here's a footer!</div>
    </div>
  )
}

export default Layout

const IndexLayout = ({ children }) => {
  return (
    <div>
      <div>here's an index header!</div>
      {children}
      <div>here's an index footer!</div>
    </div>
  )
}
