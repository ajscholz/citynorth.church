/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline'

export default function Example() {
  return (
    <div className='bg-blue-500'>
      <div className='max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between flex-wrap'>
          <div className='w-0 flex-1 flex items-center'>
            <p className='mx-auto font-medium text-white truncate'>
              {/* <span className='md:hidden'>We announced a new product!</span> */}
              <span className='inline'>Sundays @ 10:30a — Sunbury, OH</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
