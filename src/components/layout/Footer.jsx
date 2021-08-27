import React from 'react'

import { navLinks, socialLinks } from '../../utilies/navLinks'
import Link from '../interactive/Link'

const Footer = () => {
  return (
    <footer className='bg-gray-800'>
      <div className='max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8'>
        <nav
          className='-mx-5 -my-2 flex flex-wrap justify-center'
          aria-label='Footer'
        >
          {navLinks.map((link) => (
            <div key={link.text} className='px-5 py-2'>
              <Link
                to={link.to}
                className='text-base text-gray-100 hover:text-gray-300'
              >
                {link.text}
              </Link>
            </div>
          ))}
        </nav>
        <div className='mt-8 flex justify-center space-x-6'>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.to}
              className='text-gray-100 hover:text-gray-300'
              {...link.props}
            >
              <span className='sr-only'>{link.name}</span>
              <link.icon className='h-6 w-6' aria-hidden='true' />
            </a>
          ))}
        </div>
        <p className='mt-8 text-center text-base text-gray-300'>
          &copy; {new Date().getFullYear()} City North Church. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
