import { ReactElement } from 'react'
import { Metadata } from '@components/metadata'
import styles from '@styles/pages/wip.module.css'
import { BackToIndex } from '@components/links/backToIndex'

export default function WIP(): ReactElement {
  return (
    <div>
      <Metadata title={'👷 Work in progress'} />
      <main className={styles.main}>
        <p className={styles.message}>I&apos;m working on this page :)</p>
        <br />
        <BackToIndex />
      </main>
    </div>
  )
}
