import React from 'react'
import PropTypes from 'prop-types'

import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

const Bold = ({ children }) => <span className='bold'>{children}</span>
const Text = ({ children }) => <p className='align-center'>{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <>{children}</>,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return (
        <>
          <h2>Embedded Asset</h2>
          <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
        </>
      )
    },
  },
}

const ContentfulRichText = ({ rawRichText }) => {
  return renderRichText(rawRichText, options)
}

ContentfulRichText.propTypes = {
  rawRichText: PropTypes.shape({ raw: PropTypes.object.isRequired }).isRequired,
}

export default ContentfulRichText
