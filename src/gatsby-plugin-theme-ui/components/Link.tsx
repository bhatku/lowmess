import React from 'react'
import { Link as ThemeUILink } from 'theme-ui'

const Link: React.FC = (props) => (
  <ThemeUILink
    sx={{
      '@media print': {
        '&::after': {
          content: `' (' attr(href) ')'`,
          fontSize: 1,
        },

        "&[href^='/']::after": {
          content: `' (https://lowmess.com' attr(href) ')'`,
        },

        "&[href^='#']": {
          textDecoration: 'none',

          '&::after': {
            content: `''`,
          },
        },
      },
    }}
    {...props}
  />
)

export default Link
