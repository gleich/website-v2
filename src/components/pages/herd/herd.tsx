import styles from '../../../styles/components/pages/herd/HerdOfEmojis.module.css'

const HerdOfEmojis = () => {
  const emojis = ['🐢', '🐄', '🦎']
  let row: JSX.Element[] = []
  for (let i = 0; i <= 8; i++) {
    let emoji = emojis[Math.floor(Math.random() * Math.floor(emojis.length))]
    row.push(<div className={styles.emoji}> {emoji} </div>)
  }
  return <div className={styles.herd}>&nbsp;{row}</div>
}

export default HerdOfEmojis
