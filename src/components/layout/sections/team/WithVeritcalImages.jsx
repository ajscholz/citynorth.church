import React from 'react'

import { GatsbyImage } from 'gatsby-plugin-image'
import ContentfulRichText from '../../../ContentfulRichText'
import { MailIcon } from '@heroicons/react/outline'

const WithVeritcalImages = ({ sectionData }) => {
  const { title, body, contentBlocks } = sectionData

  return (
    <div className='bg-white'>
      <div className='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
        <div className='space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0'>
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
              className='space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0'
            >
              {contentBlocks.map((person) => {
                const { image } = person.images[0]

                return (
                  <li key={person.id} className='sm:py-8'>
                    <div className='space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0'>
                      <div className='aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4'>
                        <GatsbyImage
                          image={image.gatsbyImageData}
                          alt={image.description}
                          className='object-cover shadow-lg rounded-lg h-full'
                          style={{ position: 'absolute' }}
                        />
                      </div>
                      <div className='sm:col-span-2'>
                        <div className='space-y-4'>
                          <div className='text-lg leading-6 font-medium space-y-1'>
                            <h3>{person.primaryText}</h3>
                            <p className='text-blue-600'>
                              {person.secondaryText}
                            </p>
                          </div>
                          {person.body && (
                            <div className='text-lg'>
                              <p className='text-gray-500'>
                                <ContentfulRichText rawRichText={person.body} />
                              </p>
                            </div>
                          )}
                          {person.callToAction && (
                            <a
                              href='mailto:andrew@citynorth.church'
                              className='flex items-center mt-3 text-gray-400 hover:text-gray-500'
                            >
                              <span className='sr-only'>Email</span>
                              <MailIcon className='w-5 h-5 mr-2' /> Email
                            </a>
                          )}
                        </div>
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

export default WithVeritcalImages
