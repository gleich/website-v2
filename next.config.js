const path = require('path')

/** @type {import('next/dist/next-server/server/config').NextConfig} */
module.exports = {
  webpack: (config) => {
    config.resolve.alias['~'] = path.resolve('./src')
    return config
  },
  compression: false,
  async redirects() {
    return [
      {
        source: '/gh/:name*',
        destination: 'https://github.com/gleich/:name*',
        permanent: true,
      },
      {
        source: '/photography',
        destination:
          'https://lightroom.adobe.com/shares/cce6349aee1b4687a2ebef28031dd37f',
        permanent: true,
      },
      {
        source: '/sports-photography',
        destination:
          'https://lightroom.adobe.com/shares/ecfb72de4208447f82b35f486dda3a59',
        permanent: true,
      },
      {
        source: '/projects',
        destination: 'https://github.com/gleich?tab=repositories',
        permanent: true,
      },
    ]
  },
}
