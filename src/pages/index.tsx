import { SocialMediaButton } from '../components/buttons/socials'
import styles from '../styles/Index.module.css'
import constants from '../data/constants'
import age from '../data/age'
import social from '../data/social'
import { Metadata } from '../components/metadata'
import Link from 'next/link'
import type { GetStaticProps } from 'next'
import { ReactElement } from 'react'

export default function Index({
  socials,
}: {
  socials: Record<string, string>[]
}): ReactElement {
  return (
    <div>
      <Metadata title={'👋🏼 ' + constants.name} />
      <main className={styles.main}>
        <div className={styles.top}>
          <span className={styles.wave}>👋🏼</span>{' '}
          <span className={styles.hey}>Hey! I&apos;m</span>
        </div>
        <p className={styles.name}>{constants.name}</p>
        <p className={styles.description}>{`${age.full} ${constants.title}`}</p>
        <div className={styles.socials}>
          <SocialMediaButton name={social.github} socials={socials} />
          <SocialMediaButton name={social.twitter} socials={socials} />
          <SocialMediaButton name={social.linkedin} socials={socials} />
          <SocialMediaButton name={social.wakatime} socials={socials} />
          <SocialMediaButton name={social.productHunt} socials={socials} />
        </div>
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
