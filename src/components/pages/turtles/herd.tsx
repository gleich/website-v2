import styles from '../../../styles/components/pages/turtles/Herd.module.css'

const TurtleHerd = ({ vertical }: { vertical: boolean }) => {
  let turtles = []
  for (let i = 0; i <= 10; i++) {
    turtles.push(<div className={styles.turtle}> 🐢 </div>)
  }
  return <div className={styles.herd}>&nbsp;{turtles}&nbsp;</div>
}

export default TurtleHerd
