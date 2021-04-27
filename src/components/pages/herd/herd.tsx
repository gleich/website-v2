import { ReactElement } from 'react'
import styles from '@styles/components/pages/herd/herd.module.css'

export function HerdOfEmojis(): ReactElement {
  const emojis = ['🐢', '🐄', '🦎']
  const column: JSX.Element[] = []
  for (let i = 0; i < 9; i++) {
    const emoji = emojis[Math.floor(Math.random() * Math.floor(emojis.length))]
    column.push(<div className={styles.emoji}>{emoji}</div>)
  }
  return <div className={styles.herd}>&nbsp;{column}</div>
}
