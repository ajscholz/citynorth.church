import React from 'react'
import PropTypes from 'prop-types'

import { Link as GatsbyLink } from 'gatsby'

import { combineClassNames } from '../../utils/functions'

const Link = ({ children, className, nav, ...props }) => {
  const defaultClassNames = ''
  // 'font-medium text-blue-500 hover:text-blue-900'

  const navLinkClassNames =
    'text-base font-medium text-gray-500 hover:text-gray-900'

  const combinedClassNames = combineClassNames(
    nav ? navLinkClassNames : defaultClassNames,
    className
  )
  return (
    <GatsbyLink {...props} className={combinedClassNames}>
      {children}
    </GatsbyLink>
  )
}

Link.propTypes = {
  ...GatsbyLink.props,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  nav: PropTypes.bool,
}

export default Link
