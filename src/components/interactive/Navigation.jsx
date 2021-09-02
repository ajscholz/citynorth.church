import React from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from './Link'
import { Fragment } from 'react'

import { navLinks } from '../../utils/navLinks'
import { StaticImage } from 'gatsby-plugin-image'

const Navigation = () => {
  return (
    <Popover className='relative bg-white shadow'>
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <div className='flex justify-between items-center py-3 md:justify-start md:space-x-10'>
              <div className='flex justify-start lg:w-0 lg:flex-1'>
                <Link to='/'>
                  <span className='sr-only'>Home</span>
                  <StaticImage
                    className='h-12 w-auto sm:h-14'
                    src='https://images.ctfassets.net/hiqf9clqtwll/fCTsdA8NWTskoC9wwECqL/dd4fd66c763ca85b876c5417f78dac54/CityNorth_Logo_B_W_small.png'
                    alt='City North Church'
                    objectFit='scale-down'
                    objectPosition='left center'
                  />
                </Link>
              </div>
              <div className='-mr-2 -my-2 md:hidden'>
                <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500'>
                  <span className='sr-only'>Open menu</span>
                  <MenuIcon className='h-6 w-6' aria-hidden='true' />
                </Popover.Button>
              </div>
              <Popover.Group as='nav' className='hidden md:flex space-x-10'>
                {navLinks.map((link) => (
                  <Link key={link.to} to={link.to} nav>
                    {link.text}
                  </Link>
                ))}
              </Popover.Group>
            </div>
          </div>

          {/* <Transition
        enter="duration-200 ease-out"
        enterFrom="transform opacity-0"
        enterTo="transform opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform opacity-100"
        leaveTo="transform opacity-0"
      >
        
      </Transition> */}

          <Popover.Overlay
            className={`${
              open ? 'opacity-50 fixed inset-0' : 'opacity-0'
            } bg-black z-10`}
          />

          <Transition
            as={Fragment}
            enter='duration-200 ease-out'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='duration-100 ease-in'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <Popover.Panel
              focus
              className='absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden'
            >
              <div className='rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
                <div className='pt-5 pb-6 px-5'>
                  <div className='pb-4 flex items-center justify-between border-b-2'>
                    <div>
                      <Popover.Button>
                        <StaticImage
                          className='h-8 w-auto'
                          src='https://images.ctfassets.net/hiqf9clqtwll/3ANeFmnoz4Yy0AUjvZN2bP/ecda1cfe3d9896230f201adcc8536001/citynorth_logo_circle_512x512.png'
                          alt='City North Church'
                          objectFit='scale-down'
                          objectPosition='left center'
                        />
                      </Popover.Button>
                    </div>
                    <div className='-mr-2'>
                      <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500'>
                        <span className='sr-only'>Close menu</span>
                        <XIcon className='h-6 w-6' aria-hidden='true' />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className='flex justify-end mt-6'>
                    <nav className='text-right grid gap-y-8'>
                      {navLinks.map((link) => (
                        <Popover.Button
                          key={link.to}
                          as={Link}
                          to={link.to}
                          nav
                        >
                          {link.text}
                        </Popover.Button>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default Navigation
