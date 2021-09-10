import type { Theme } from 'theme-ui'

export const theme: Theme = {
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  },
  text: {
    default: {
      color: 'text',
      fontSize: 2,
      fontFamily: 'body',
    },
    heading: {
      color: 'text',
      fontSize: 'clamp(65px, 10vw, 130px)',
      fontFamily: 'body',
    },
  },
  config: {
    printColorModeName: 'light',
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#e92741',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#e92741',
      },
    },
  },
}
