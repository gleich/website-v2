import Head from 'next/head'
import SocialMediaButton from '../components/buttons/socials'
import styles from '../styles/Index.module.css'

const Home = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  )
}

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.top}>
        👋🏼 <span className={styles.hey}>Hey! I'm</span>
      </div>
      <p className={styles.name}>Matthew Gleich</p>
      <p className={styles.description}>16-year-old open-source developer</p>
      <div className={styles.socials}>
        <SocialMediaButton
          name="GitHub"
          icon="github"
          url="https://github.com/Matt-Gleich"
        />
        <SocialMediaButton
          name="Twitter"
          icon="twitter"
          url="https://twitter.com/MattGleich"
        />
        <SocialMediaButton
          name="LinkedIn"
          icon="linkedin"
          url="https://www.linkedin.com/in/matthew-gleich/"
        />
      </div>
      <footer className={styles.footer}>
        © Matthew Gleich {new Date().getFullYear()}
      </footer>
    </main>
  )
}

const Header = () => {
  return (
    <Head>
      <title>👋🏼 Matthew Gleich</title>
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
        content="Matthew Gleich is a 16-year-old thats building scalable, multi-platform applications using cutting edge frameworks and technologies. 100% self taught 🚀"
      />
      <meta
        name="keywords"
        content="Matthew Gleich, Gleich, Matthew, photography, goffstown, coding, cycling, hampshire, golang, swift, flutter, dart, github, rpi, ghs, import_sorter, ios, hackclub"
      />
    </Head>
  )
}

export default Home
