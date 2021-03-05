import Head from 'next/head'
import SocialMediaButton from '../src/components/buttons/socials'
import styles from '../styles/Index.module.css'
import constants from '../src/data/constants'
import age from '../src/data/age'
import social from '../src/data/social'
import { GetStaticProps } from 'next'

const Home = ({ urls }) => {
  return (
    <div>
      <Header />
      <Main urls={urls} />
    </div>
  )
}

const Main = ({ urls }) => {
  return (
    <main className={styles.main}>
      <div className={styles.top}>
        👋🏼 <span className={styles.hey}>Hey! I'm</span>
      </div>
      <p className={styles.name}>{constants.name}</p>
      <p className={styles.description}>{`${age.full} ${constants.title}`}</p>
      <div className={styles.socials}>
        <SocialMediaButton name={social.github} urls={urls} />
        <SocialMediaButton name={social.twitter} urls={urls} />
        <SocialMediaButton name={social.linkedin} urls={urls} />
      </div>
      <footer className={styles.footer}>{constants.copyright}</footer>
    </main>
  )
}

const Header = () => {
  return (
    <Head>
      <title>👋🏼 {constants.name}</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="preload"
        href="https://cdn.jsdelivr.net/npm/victormono@latest/dist/index.min.css"
        as="style"
      />
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

      <meta
        name="description"
        content={`${constants.name} is a ${age.full} thats building scalable, multi-platform applications using cutting edge frameworks and technologies. 100% self taught 🚀`}
      />
      <meta
        name="keywords"
        content={`${constants.name}, Gleich, Matthew, photography, goffstown, coding, cycling, hampshire, golang, swift, flutter, dart, github, rpi, ghs, import_sorter, ios, hackclub`}
      />
    </Head>
  )
}

// Getting social media urls
export const getStaticProps: GetStaticProps = async () => {
  // Formulating the query
  let query = 'query { socials {'
  for (const account of Object.values(social)) {
    query += account.toLowerCase() + ' { url }'
  }
  query += '} }'

  // Making the request
  let res = await fetch('https://gql.api.mattglei.ch', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: query }),
  })
  const urls = await res.json()

  return {
    props: { urls },
    revalidate: 3600, // Update every hour
  }
}

export default Home
