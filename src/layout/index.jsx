import React from 'react'

import Hero from './Hero'
import IndexHero from './IndexHero'

const Layout = ({ children, pageContext }) => {
  if (pageContext.layout === 'index') {
    return <IndexLayout>{children}</IndexLayout>
  }
  return (
    <div>
      <Hero />
      {children}
      <div>here's a footer!</div>
    </div>
  )
}

export default Layout

const IndexLayout = ({ children }) => {
  return (
    <div>
      <IndexHero />
      {children}
      <div>here's an index footer!</div>
    </div>
  )
}
