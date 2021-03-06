import Metadata from '../components/metadata'
import HerdOfEmojis from '../components/pages/herd/herd'
import styles from '../styles/Herd.module.css'
import Link from 'next/link'

const Herd = () => (
  <div>
    <Metadata title="👁️ 👁️" />
    <main className={styles.main}>
      <p>You found the sacred pasture!</p>
      <br />
      <Link href="/">← Back to the mainland</Link>
      <div className={styles.emojiBox}>
        <HerdOfEmojis />
        <HerdOfEmojis />
        <HerdOfEmojis />
        <HerdOfEmojis />
        <HerdOfEmojis />
      </div>
    </main>
  </div>
)

export default Herd
