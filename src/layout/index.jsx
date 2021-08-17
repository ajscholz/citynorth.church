import React from 'react'

import Hero from './Hero'
import IndexHero from './IndexHero'
import HeaderBanner from './HeaderBanner'

const Layout = ({ children, pageContext }) => {
  return (
    <>
      <HeaderBanner />
      {pageContext.layout === 'index' ? (
        <IndexLayout>{children}</IndexLayout>
      ) : (
        <div>
          <Hero />
          {children}
          <div>here's a footer!</div>
        </div>
      )}
    </>
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
