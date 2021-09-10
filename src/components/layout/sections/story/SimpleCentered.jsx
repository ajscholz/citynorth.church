import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import ContentfulRichText from '../../../ContentfulRichText'

const SimpleCentered = ({ sectionData }) => {
  const { contentBlocks } = sectionData
  const story = contentBlocks[0]
  const { image } = story.images[0]

  return (
    <section className='py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24'>
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <svg
          className='absolute top-full right-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2'
          width={404}
          height={404}
          fill='none'
          viewBox='0 0 404 404'
          role='img'
          aria-labelledby='svg-workcation'
        >
          <defs>
            <pattern
              id='ad119f34-7694-4c31-947f-5c9d249b21f3'
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits='userSpaceOnUse'
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className='text-gray-200'
                fill='currentColor'
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={404}
            fill='url(#ad119f34-7694-4c31-947f-5c9d249b21f3)'
          />
        </svg>

        <div className='relative'>
          <blockquote className='mt-3'>
            <div className='max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900'>
              <p>
                &ldquo;
                <ContentfulRichText rawRichText={story.body} />
                &rdquo;
              </p>
            </div>
            <footer className='mt-8'>
              <div className='md:flex md:items-center md:justify-center'>
                <GatsbyImage
                  className='md:flex-shrink-0 h-12 w-12 rounded-full'
                  image={image.gatsbyImageData}
                  imgClassName='mx-auto'
                  alt={image.description}
                />
                <div className='mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center'>
                  <div className='text-base font-medium text-gray-900'>
                    {story.primaryText}
                  </div>
                </div>
                <svg
                  className='hidden md:block mx-1 h-5 w-5 text-blue-600'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M11 0h3L9 20H6l5-20z' />
                </svg>

                <div className='text-base font-medium text-blue-700'>
                  {story.secondaryText}
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default SimpleCentered
