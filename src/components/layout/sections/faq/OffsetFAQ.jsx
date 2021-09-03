import React from 'react'

import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

import { combineClassNames } from '../../../../utils/functions'
import ContentfulRichText from '../../../ContentfulRichText'
import ContentWarning from '../../../interactive/ContentWarning'

const OffsetFAQ = ({ sectionData }) => {
  const { id, title, body, name, contentBlocks } = sectionData

  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8'>
        <div className='lg:grid lg:grid-cols-3 lg:gap-8 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-gray-200'>
          <div>
            <h2 className='text-3xl font-extrabold text-gray-900'>{title}</h2>
            {body ? (
              <p className='mt-4 text-lg text-gray-500'>
                <ContentfulRichText rawRichText={body} />
              </p>
            ) : (
              <ContentWarning
                contentName={name.toUpperCase()}
                fieldName='BODY'
                id={id}
              />
            )}
          </div>
          <div className='mt-8 pt-8 lg:mt-0 lg:pt-0 lg:col-span-2 lg:pl-8'>
            <dl className='space-y-12'>
              {contentBlocks.map((faq) => (
                <Disclosure as='div' key={faq.id}>
                  {({ open }) => (
                    <>
                      <dt className='text-lg leading-6 font-medium text-gray-900'>
                        <Disclosure.Button className='text-left w-full flex justify-between items-start text-gray-400'>
                          <span>{faq.primaryText}</span>
                          <span className='ml-6 h-7 flex items-center'>
                            <ChevronDownIcon
                              className={combineClassNames(
                                open ? '-rotate-180' : 'rotate-0',
                                'h-6 w-6 transform'
                              )}
                              aria-hidden='true'
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      {faq.body ? (
                        <Disclosure.Panel as='dd' className='mt-2'>
                          <p className='text-base text-gray-500'>
                            <ContentfulRichText rawRichText={faq.body} />
                          </p>
                        </Disclosure.Panel>
                      ) : (
                        <ContentWarning
                          contentName={faq.name.toUpperCase()}
                          fieldName='BODY'
                          id={id}
                        />
                      )}
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OffsetFAQ
