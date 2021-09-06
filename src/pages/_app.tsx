import { ThemeProvider } from '@theme-ui/theme-provider'
import type { AppProps } from 'next/app'
import { theme } from '@data/theme'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} hreflang="en" />
    </ThemeProvider>
  )
}

export default MyApp
