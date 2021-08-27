import React from 'react'

import IndexHero from './IndexHero'
import HeaderBanner from './HeaderBanner'
import Navigation from '../components/interactive/Navigation'

const Layout = ({ children, pageContext }) => {
  return (
    <>
      {pageContext.layout !== 'error' && (
        <>
          <HeaderBanner />
          <Navigation />
        </>
      )}
      {pageContext.layout === 'index' ? (
        <IndexLayout>{children}</IndexLayout>
      ) : pageContext.layout === 'error' ? (
        <ErrorLayout>{children}</ErrorLayout>
      ) : pageContext.layout === 'standard' ? (
        <StandardLayout>{children}</StandardLayout>
      ) : (
        <div>
          {/* <Hero /> */}
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

const StandardLayout = ({ children }) => {
  return children
}
