import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
})

export const theme = extendTheme({
  breakpoints,
  colors: {
    yellow: {
      '900': '#FFBA08',
      '400': '#FFBA0880',
    },
    gray: {
      	'900': '#47585B',
        '700': '#999999',
        '600': '#99999980',
        '300': '#DADADA',
        '200': '#F5F8FA',
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.200',
        color: 'gray.900',
      }
    }
  }
})