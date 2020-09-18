import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
    </div>
  )
}

const Header = () => {
  return (
    <Head>
      <title>👋🏼 Matthew Gleich</title>
      <link rel="icon" href="/logo.png" />
    </Head>
  )
}

const Main = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}> 👋🏼 Hello!</h1>
      <h2 className={styles.description}>
        🚧 I'm currently{' '}
        <a href="https://github.com/Matt-Gleich/site-v2">building</a> this site
        🚧
      </h2>
      <p>
        In the mean time you can go checkout my{' '}
        <a href="https://github.mattglei.ch" target="_blank">
          GitHub account
        </a>{' '}
        <br />
        or my{' '}
        <a href="https://old.mattglei.ch" target="_blank">
          old site built with flutter
        </a>
        .
      </p>
    </main>
  )
}
