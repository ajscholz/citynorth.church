import React from 'react'

import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

import { combineClassNames } from '../../../../utils/functions'
import ContentfulRichText from '../../../ContentfulRichText'
import ContentWarning from '../../../interactive/ContentWarning'

const CenteredFAQ = ({ sectionData }) => {
  const { title, body, contentBlocks } = sectionData

  return (
    <div className='bg-gray-50'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto divide-y-2 divide-gray-200'>
          <div className='text-center'>
            <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>
              {title}
            </h2>
            {body && (
              <p className='mt-4 text-lg text-gray-500'>
                <ContentfulRichText rawRichText={body} />
              </p>
            )}
          </div>
          <dl className='mt-10 space-y-6 divide-y divide-gray-200'>
            {contentBlocks.map((faq) => (
              <Disclosure as='div' key={faq.id} className='pt-6'>
                {({ open }) => (
                  <>
                    <dt className='text-lg'>
                      <Disclosure.Button className='text-left w-full flex justify-between items-start text-gray-400'>
                        <span className='font-medium text-gray-900'>
                          {faq.primaryText}
                        </span>
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
                      <Disclosure.Panel as='dd' className='mt-2 pr-12'>
                        <p className='text-base text-gray-500'>
                          <ContentfulRichText rawRichText={faq.body} />
                        </p>
                      </Disclosure.Panel>
                    ) : (
                      <ContentWarning
                        contentName={faq.name.toUpperCase()}
                        fieldName='BODY'
                        id={faq.id}
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
  )
}

export default CenteredFAQ

/* This example requires Tailwind CSS v2.0+ */
