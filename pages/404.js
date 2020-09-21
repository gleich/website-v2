import styles from '../styles/404.module.css'

export default function Custom404() {
  return (
    <main className={styles.body}>
      <h1>❗️ 404 Error ❗️</h1>
      <h1 className={styles.title}>Woah there partner!</h1>
      <div className={styles.subtitle}>
        <h2>You left the system!</h2>
      </div>
    </main>
  )
}
