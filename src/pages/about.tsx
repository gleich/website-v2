import { ReactElement } from 'react'
import styles from '@styles/pages/about.module.css'
import { Metadata } from '@components/metadata'
import { Title } from '@components/text/title'

export default function About(): ReactElement {
  return (
    <div>
      <Metadata title={'About Matt Gleich'} />
      <main className={styles.main}>
        <div className={styles.text}>
          <Title name={'About'} />
          <p className={styles.about}>
            Hello and welcome to my website! Since January of 2019 when I
            started programming I&apos;ve been working and learning in public on
            GitHub. From design to development I love the entire process of
            building software. Since I started programming I&apos;ve made a
            hefty amount of PRs (250+) and repositories (130+) working on
            everything from CI/CD automation software to CLI tools and mobile
            apps. I focus on maintainability, performance, and security with all
            of my projects and try to follow a lot of best practices. Following
            best practices early on is the way to go and I’m a huge supporter of
            it. A large number of my projects have unit tests, almost all have
            linting and CI, and I ensure I am following the best git practices.
            In my free time, I enjoy photography and cycling. Freezing time and
            capturing small amounts of detail is super interesting to me and I
            always enjoy a good cycling adventure.
          </p>
        </div>
        <img
          className={styles.picture}
          src="/images/me.jpg"
          alt="Picture of Matthew Gleich"
        />
      </main>
    </div>
  )
}
