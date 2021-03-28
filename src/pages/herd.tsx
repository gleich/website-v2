import { Metadata } from '../components/metadata'
import { HerdOfEmojis } from '../components/pages/herd/herd'
import styles from '../styles/Herd.module.css'
import Link from 'next/link'
import { ReactElement } from 'react'

export default function Herd(): ReactElement {
  const rows: JSX.Element[] = []
  for (let i = 0; i < 5; i++) {
    rows.push(<HerdOfEmojis />)
  }
  return (
    <div>
      <Metadata title="👁️ 👁️" />
      <main className={styles.main}>
        <p>You found the sacred pasture!</p>
        <br />
        <Link href="/">← Back to the mainland</Link>
        <div className={styles.emojiBox}>{rows}</div>
      </main>
    </div>
  )
}
