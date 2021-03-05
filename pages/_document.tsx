import Document, { Head, Html, Main, NextScript } from 'next/document'
import constants from '../src/data/constants'
import age from '../src/data/age'

export default class extends Document {
  public render() {
    return (
      <Html lang="en">
        <Header />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

const Header = () => {
  return (
    <Head>
      <title>👋🏼 {constants.name}</title>
      <link rel="icon" href="/favicon.ico" />

      {/* CSS Preloading */}
      <link
        rel="preload"
        href="https://cdn.jsdelivr.net/npm/victormono@latest/dist/index.min.css"
        as="style"
      />

      {/* Social Displays */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />

      {/* SEO */}
      <meta
        name="description"
        content={`${constants.name} is a ${age.full} thats building scalable, multi-platform applications using cutting edge frameworks and technologies. 100% self taught 🚀`}
      />
      <meta
        name="keywords"
        content={`${constants.name}, Gleich, Matthew, photography, goffstown, coding, cycling, hampshire, golang, swift, flutter, dart, github, rpi, ghs, import_sorter, ios, hackclub`}
      />
      <meta name="author" content="Matthew Gleich" />
    </Head>
  )
}
