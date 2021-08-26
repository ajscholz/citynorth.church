import React from 'react'
import PropTypes from 'prop-types'

import * as icons from '@heroicons/react/outline'

const Heroicon = ({ icon, ...props }) => {
  return icon === 'academic-cap' ? (
    <icons.AcademicCapIcon {...props} />
  ) : icon === 'arrow-circle-right' ? (
    <icons.ArrowCircleRightIcon {...props} />
  ) : icon === 'clipboard' ? (
    <icons.ClipboardIcon {...props} />
  ) : null
}

Heroicon.propTypes = {
  icon: PropTypes.string.isRequired,
}

export default Heroicon
