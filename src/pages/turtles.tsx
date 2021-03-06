import Metadata from '../components/metadata'
import TurtleHerd from '../components/pages/turtles/herd'
import styles from '../styles/Turtles.module.css'
import Link from 'next/link'

const Turtles = () => (
  <div>
    <Metadata title="🐢" />
    <main className={styles.main}>
      <p>You found the sacred turtle pasture!</p>
      <br />
      <Link href="/">← Back to the mainland</Link>
      <div className={styles.turtleBox}>
        <TurtleHerd vertical={true} />
        <TurtleHerd vertical={true} />
        <TurtleHerd vertical={true} />
        <TurtleHerd vertical={true} />
        <TurtleHerd vertical={true} />
      </div>
    </main>
  </div>
)

export default Turtles
