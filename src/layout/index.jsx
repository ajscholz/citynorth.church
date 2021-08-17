import React from 'react'

import Hero from './Hero'
import IndexHero from './IndexHero'
import HeaderBanner from './HeaderBanner'

const Layout = ({ children, pageContext }) => {
  return (
    <>
      {pageContext.layout !== 'error' && <HeaderBanner />}
      {pageContext.layout === 'index' ? (
        <IndexLayout>{children}</IndexLayout>
      ) : pageContext.layout === 'error' ? (
        <ErrorLayout>{children}</ErrorLayout>
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

const ErrorLayout = ({ children }) => {
  return children
}
