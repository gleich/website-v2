import { Metadata } from '@components/metadata'
import { HerdOfEmojis } from '@components/pages/herd/herd'
import styles from '@styles/pages/herd.module.css'
import { ReactElement } from 'react'
import { BackToIndex } from '@components/links/backToIndex'

export default function Herd(): ReactElement {
  const rows: JSX.Element[] = []
  for (let i = 0; i < 5; i++) {
    rows.push(<HerdOfEmojis />)
  }
  return (
    <div>
      <Metadata title="👁️ 👁️" />
      <main className={styles.main}>
        <p className={styles.welcome}>You found the sacred pasture!</p>
        <br />
        <BackToIndex />
        <div className={styles.emojiBox}>{rows}</div>
      </main>
    </div>
  )
}
