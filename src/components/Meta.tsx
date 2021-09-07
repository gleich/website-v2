import Head from 'next/head'

const Meta = ({
  title,
  description,
}: {
  title: string
  description: string
}): JSX.Element => (
  <Head>
    <title>{title}</title>

    {/* General */}
    <meta name="description" content={description} />
    <meta
      name="keywords"
      content="Matt, Gleich, photography, coding, cycling, hampshire, golang, github"
    />
    <meta name="author" content="Matt Gleich" />
    <meta charSet="utf-8" />

    {/* Icons */}
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
    <link rel="icon" href="/icons/favicon.ico" />

    {/* Open Graph */}
    <meta property="og:title" content={title} />
    <meta property="og:type" content="website" />
    <meta property="og:description" content={description} />
    <meta property="og:locale" content="en_US" />
    <meta property="og:image" content="/images/me.jpg" />
    <meta property="og:image:width" content="700" />
    <meta property="og:image:height" content="753" />
    <meta property="og:site_name" content="Matt Gleich's personal website" />

    {/* Twitter */}
    <meta property="twitter:creator" content="@matthewgleich" />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content="/images/me.jpg" />
  </Head>
)

export default Meta
