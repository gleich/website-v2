import Head from 'next/head'
import constants from '../data/constants'
import age from '../data/age'
import { ReactElement } from 'react'

const Metadata = ({ title }: { title: string }): ReactElement => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/icons/favicon.ico" />

      {/* Social Displays */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icons/favicon-16x16.png"
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

export default Metadata
