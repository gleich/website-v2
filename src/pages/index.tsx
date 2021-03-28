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
  urls,
}: {
  urls: Record<string, Record<string, Record<string, Record<string, string>>>>
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
          <SocialMediaButton name={social.github} urls={urls} />
          <SocialMediaButton name={social.twitter} urls={urls} />
          <SocialMediaButton name={social.linkedin} urls={urls} />
          <SocialMediaButton name={social.wakatime} urls={urls} />
          <SocialMediaButton name={social.productHunt} urls={urls} />
        </div>
        <footer className={styles.footer}>
          🐢 🐢 🐢 &nbsp; {constants.copyright} &nbsp; 🐢 🐢{' '}
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
  // Formulating the query
  let query = 'query { socials {'
  for (const account of Object.values(social)) {
    query += account.toLowerCase() + ' { url }'
  }
  query += '} }'

  // Making the request
  const res = await fetch('https://gql.api.mattglei.ch', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: query }),
  })
  const urls: Record<
    string,
    Record<string, Record<string, Record<string, string>>>
  > = await res.json()

  return {
    props: { urls },
    revalidate: 3600, // Update every hour
  }
}
