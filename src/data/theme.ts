import type { Theme } from 'theme-ui'

export const theme: Theme = {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    initialColorModeName: 'dark',
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
