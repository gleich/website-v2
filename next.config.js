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
          'https://lightroom.adobe.com/shares/e96b417d28384fe7b26b54b8809f5d08',
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
