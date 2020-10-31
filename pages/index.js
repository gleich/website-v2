import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  )
}

const Header = () => {
  return (
    <Head>
      <title>👋🏼 Matthew Gleich</title>
      <link rel="icon" href="/favicon.ico" />
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
        content="Matthew Gleich, Gleich, Matthew, photography, goffstown, coding, cycling, hampshire, golang, kubernetes, flutter, dart, github, rpi, ghs, import_sorter"
      />
    </Head>
  )
}

const Main = () => {
  return (
    <main className={styles.body}>
      <h1 className={styles.title}>
        <div
          className="animate__animated animate__wobble"
          style={{ display: 'inline-block' }}
        >
          👋🏼
        </div>{' '}
        Hello!
        <br />
        I'm <div className={styles.greenUnderline}>Matthew Gleich</div>
      </h1>
      <h2>16-year-old developer from New Hampshire</h2>
      <p className={styles.about}>
        Ever since I was a little kid I've always been looking to make things,
        especially when it can help someone or automate something. In January
        2019 I started programming on my{' '}
        <a href="https://www.firstinspires.org/robotics/frc">FIRST robotics</a>{' '}
        team,{' '}
        <a href="https://github.com/Team-501-The-PowerKnights">
          501 The PowerKnights
        </a>{' '}
        as a{' '}
        <a href="https://github.com/Team-501-The-PowerKnights/Vision2020">
          computer vision programmer
        </a>
        . Since then I have been fascinated with programming, trying to learn as
        much as possible. Besides programming I enjoy{' '}
        <a href="https://lightroom.adobe.com/shares/71921c41321440ed968321b930b1c7e7">
          📷 photography
        </a>
        , 🚵🏼‍♂️ riding my bike, 🚶🏼‍♂️ hiking, and hanging out with friends. You should
        check out <a href="https://hackclub.com/">hackclub</a>!
      </p>
    </main>
  )
}
