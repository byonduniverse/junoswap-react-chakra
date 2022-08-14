import React from 'react'
import { extendTheme } from '@chakra-ui/react'

export const styles = {
  fonts: {
    header: {
      fontSize: '24px',
      fontWeight: 700,
    },
    title: {
      fontSize: '18px',
      fontWeight: 700,
    },
    content: {
      fontSize: '14px',
      fontWeight: 500,
    },
  },
  color: {
    primary: 'rgba(240, 130, 125, 0.8)',
    gray: 'rgba(108, 108, 108, 1)',
    dark: 'rgba(23, 23, 23, 1)',
  },
}

const theme = extendTheme({
  components: {
    Link: {
      baseStyle: {
        fontWeight: 500,
        fontSize: '14px',
        color: styles.color.primary,
        padding: '5px',
        borderRadius: '15px',
      },
      variants: {
        outline: {
          color: styles.color.primary,
        },
        solid: {
          borderRadius: '15px',
          color: 'white',
          fontSize: '14px',
        },
      },
      defaultProps: {
        size: 'md',
        variant: 'outline',
        color: styles.color.primary,
      },
    },
  },
})

export const ThemeContext = React.createContext(styles)

export default theme
