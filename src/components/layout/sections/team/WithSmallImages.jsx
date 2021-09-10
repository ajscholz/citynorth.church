import React from 'react'

import { GatsbyImage } from 'gatsby-plugin-image'
import ContentfulRichText from '../../../ContentfulRichText'

const WithSmallImages = ({ sectionData }) => {
  const { title, body, contentBlocks } = sectionData

  return (
    <div className='bg-white'>
      <div className='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8'>
          <div className='space-y-5 sm:space-y-4'>
            <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>
              {title}
            </h2>
            {body && (
              <p className='text-xl text-gray-500'>
                <ContentfulRichText rawRichText={body} />
              </p>
            )}
          </div>
          <div className='lg:col-span-2'>
            <ul
              role='list'
              className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8'
            >
              {contentBlocks.map((person) => {
                const { image } = person.images[0]
                return (
                  <li key={person.id}>
                    <div className='flex items-center space-x-4 lg:space-x-6'>
                      <GatsbyImage
                        image={image.gatsbyImageData}
                        alt={image.description}
                        className='w-16 h-16 rounded-full lg:w-20 lg:h-20'
                      />
                      <div className='font-medium text-lg leading-6 space-y-1'>
                        <h3>{person.primaryText}</h3>
                        <p className='text-blue-600'>{person.secondaryText}</p>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WithSmallImages
