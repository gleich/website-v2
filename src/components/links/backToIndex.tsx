import { ReactElement } from 'react'
import Link from 'next/link'
import styles from '@styles/components/links/backToIndex.module.css'

export function BackToIndex(): ReactElement {
  return (
    <div className={styles.link}>
      <Link href="/">← Back to the mainland</Link>
    </div>
  )
}
