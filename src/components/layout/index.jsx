import React from 'react'

import HeaderBanner from './HeaderBanner'
import Navigation from '../interactive/Navigation'
import Footer from './Footer'

const Layout = ({ children, pageContext }) => {
  return pageContext.layout === 'standard' ? (
    <StandardLayout>{children}</StandardLayout>
  ) : (
    <FullScreenLayout>{children}</FullScreenLayout>
  )
}

export default Layout

const FullScreenLayout = ({ children }) => {
  return <main>{children}</main>
}

const StandardLayout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <HeaderBanner />
      <Navigation />
      <main className='flex-grow'>{children}</main>
      <Footer />
    </div>
  )
}
