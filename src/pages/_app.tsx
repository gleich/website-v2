import type { AppProps } from 'next/app'
import '@styles/main.css'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} hreflang="en" />
)

export default MyApp
