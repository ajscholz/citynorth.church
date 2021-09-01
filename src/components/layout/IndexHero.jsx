/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
import FocalPointImage from '../FocalPointImage'

const IndexHero = ({ bannerQueryData }) => {
  const { primaryText, secondaryText, images } = bannerQueryData
  const image = images[0]

  return (
    <div className='relative bg-gray-50'>
      <main className='lg:relative'>
        <div className='mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left'>
          <div className='px-4 lg:w-1/2 sm:px-8 xl:pr-16'>
            <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl'>
              <span className='block'>{primaryText}</span>
              <span className='block text-blue-600 xl:inline'>
                {secondaryText}
              </span>
            </h1>
            {/* <p className='mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl'>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p> */}
            {/* <div className='mt-10 sm:flex sm:justify-center lg:justify-start'>
              <div className='rounded-md shadow'>
                <a
                  href='#'
                  className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10'
                >
                  Get started
                </a>
              </div>
              <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
                <a
                  href='#'
                  className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10'
                >
                  Live demo
                </a>
              </div>
            </div> */}
          </div>
        </div>
        <div className='relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full'>
          <FocalPointImage
            className='absolute inset-0 w-full h-full object-cover'
            imageData={image}
          />
        </div>
      </main>
    </div>
  )
}

export default IndexHero

export const query = graphql`
  fragment bannerFragment on ContentfulContent {
    primaryText
    secondaryText
    images {
      ...imageFragment
    }
  }
`
