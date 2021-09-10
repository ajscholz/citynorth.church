import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import ContentfulRichText from '../../../ContentfulRichText'

const BackgroundImage = ({ sectionData }) => {
  const { contentBlocks } = sectionData
  const story = contentBlocks[0]
  const { image } = story.images[0]
  return (
    <div className='bg-white py-16 lg:py-24'>
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='relative py-24 px-8 bg-blue-500 rounded-xl shadow-2xl overflow-hidden lg:px-16 lg:grid lg:grid-cols-2 lg:gap-x-8'>
          <GatsbyImage
            image={image.gatsbyImageData}
            className='absolute inset-0 opacity-100 filter saturate-0 '
            imgClassName='w-full h-full'
            style={{ position: 'absolute' }}
            alt={image.description}
          />
          <div className='absolute inset-0 bg-blue-500 mix-blend-multiply' />
          <div className='relative lg:col-span-1'>
            <blockquote className='mt-6 text-white'>
              <p className='text-xl font-medium sm:text-2xl'>
                <ContentfulRichText rawRichText={story.body} />
              </p>
              <footer className='mt-6'>
                <p className='flex flex-col font-medium'>
                  <span>{story.primaryText}</span>
                  <span>{story.secondaryText}</span>
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BackgroundImage
