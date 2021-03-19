import type { AppProps } from 'next/app'
import { ReactElement } from 'react'
import '../styles/main.css'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} hreflang="en" />
}

export default MyApp
