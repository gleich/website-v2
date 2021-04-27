import { SocialMediaButton } from '../components/buttons/socials'
import { PageButton } from '../components/buttons/page'
import styles from '../styles/Index.module.css'
import constants from '../data/constants'
import age from '../data/age'
import social from '../data/social'
import { Metadata } from '../components/metadata'
import Link from 'next/link'
import type { GetStaticProps } from 'next'
import { ReactElement } from 'react'
import { Title } from '../components/text/title'

export default function Index({
  socials,
}: {
  socials: Record<string, string>[]
}): ReactElement {
  return (
    <div>
      <Metadata title={'👋🏼 ' + constants.name} />
      <main className={styles.main}>
        <div>
          <div className={styles.top}>
            <span className={styles.wave}>👋🏼</span>{' '}
            <span className={styles.hey}>Hey! I&apos;m</span>
          </div>
          <Title name={constants.name} />
          <p
            className={styles.description}
          >{`${age.full} ${constants.title}`}</p>
          <div className={styles.socials}>
            <SocialMediaButton name={social.github} socials={socials} />
            <SocialMediaButton name={social.twitter} socials={socials} />
            <SocialMediaButton name={social.linkedin} socials={socials} />
            <SocialMediaButton name={social.wakatime} socials={socials} />
            <SocialMediaButton name={social.productHunt} socials={socials} />
          </div>
        </div>
        <nav className={styles.buttons}>
          <PageButton path={'about'} name={'About Me'} />
          <PageButton path={'wip'} name={'Skills'} />
          <PageButton path={'wip'} name={'Blog'} />
          <PageButton path={'wip'} name={'Projects'} />
          <PageButton path={'wip'} name={'Photography'} />
          <PageButton path={'wip'} name={'Stats'} />
        </nav>
        <footer className={styles.footer}>
          &nbsp; {constants.copyright} &nbsp;{' '}
          <Link href="/herd" passHref>
            <a className={styles.secretTurtle}>🐢</a>
          </Link>
        </footer>
      </main>
    </div>
  )
}

// Getting social media urls
export const getStaticProps: GetStaticProps = async () => {
  // Making the request
  const resp = await fetch('https://gql.api.mattglei.ch', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: 'query { socials { accounts { name, url } } }',
    }),
  })

  const resp_body = await resp.json()
  const socials = resp_body['data']['socials']['accounts']

  return {
    props: { socials },
    revalidate: 3600, // Update every hour
  }
}
