import React from 'react'
import PropTypes from 'prop-types'

const Component = () => null

export const CONTACT_APPEARANCES = {
  Centered: (data) => <Component sectionData={data} />,
  'Split Two Tone': (data) => <Component sectionData={data} />,
  'Split With Image': (data) => <Component sectionData={data} />,
  'Split With Brand Color Panel': (data) => <Component sectionData={data} />,
}

const ContactSection = ({ section }) => {
  const { sectionTypeAppearance } = section
  const { appearance } = sectionTypeAppearance

  return CONTACT_APPEARANCES[appearance](section)
}

ContactSection.propTypes = {
  section: PropTypes.object.isRequired,
}

export default ContactSection
