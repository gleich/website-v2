import { ReactElement } from 'react'
import styles from '../../../styles/components/pages/herd/HerdOfEmojis.module.css'

const HerdOfEmojis = (): ReactElement => {
  const emojis = ['🐢', '🐄', '🦎']
  const row: JSX.Element[] = []
  for (let i = 0; i <= 8; i++) {
    const emoji = emojis[Math.floor(Math.random() * Math.floor(emojis.length))]
    row.push(<div className={styles.emoji}> {emoji} </div>)
  }
  return <div className={styles.herd}>&nbsp;{row}</div>
}

export default HerdOfEmojis
