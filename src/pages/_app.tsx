import type { AppProps } from 'next/app'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} hreflang="en" />
}

export default MyApp
