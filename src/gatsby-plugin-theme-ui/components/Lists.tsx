import React from 'react'
import { Box, Container, Text } from 'theme-ui'
import { ThemeUIProps } from '../../types/ThemeUIComponent'

const List: React.FC<ThemeUIProps> = (props) => (
  <Text
    sx={{
      paddingLeft: 0,
      fontSize: [null, null, 3],

      'ul, ol': {
        marginY: 0,
      },
    }}
    {...props}
  />
)

const UnorderedList: React.FC = (props) => (
  <Box>
    <Container sx={{ maxWidth: 'mdx-measure' }}>
      <List as="ul" {...props} />
    </Container>
  </Box>
)

const OrderedList: React.FC = (props) => (
  <Box>
    <Container sx={{ maxWidth: 'mdx-measure' }}>
      <List as="ol" {...props} />
    </Container>
  </Box>
)

export { UnorderedList, OrderedList }
