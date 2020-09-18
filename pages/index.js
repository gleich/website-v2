import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>👋 Matthew Gleich</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>👋 Hello!</h1>
        <h2 className={styles.description}>
          🚧 I'm currently{' '}
          <a href="https://github.com/Matt-Gleich/site-v2">building</a> this
          site 🚧
        </h2>
      </main>
    </div>
  )
}
