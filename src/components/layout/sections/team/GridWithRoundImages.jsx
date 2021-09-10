import React from 'react'

import { GatsbyImage } from 'gatsby-plugin-image'
import ContentfulRichText from '../../../ContentfulRichText'
import { MailIcon } from '@heroicons/react/outline'

const GridWithRoundImages = ({ sectionData }) => {
  const { title, body, contentBlocks } = sectionData

  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24'>
        <div className='space-y-12'>
          <div className='space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl'>
            <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>
              {title}
            </h2>
            {body && (
              <p className='text-xl text-gray-500'>
                <ContentfulRichText rawRichText={body} />
              </p>
            )}
          </div>
          <ul
            role='list'
            className='mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl'
          >
            {contentBlocks.map((person) => {
              const { image } = person.images[0]

              return (
                <li key={person.id}>
                  <div className='space-y-6'>
                    <GatsbyImage
                      image={image.gatsbyImageData}
                      alt={image.description}
                      className='mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56'
                    />
                    <div className='space-y-2'>
                      <div className='text-lg leading-6 font-medium space-y-1'>
                        <h3>{person.primaryText}</h3>
                        <p className='text-blue-600'>{person.secondaryText}</p>
                      </div>
                      {person.callToAction && (
                        <a
                          href='mailto:info@citynorth.church'
                          className='flex justify-center items-center mt-3 text-gray-400 hover:text-gray-500'
                        >
                          <span className='sr-only'>Email</span>
                          <MailIcon className='w-5 h-5 mr-2' /> Email
                        </a>
                      )}
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default GridWithRoundImages
