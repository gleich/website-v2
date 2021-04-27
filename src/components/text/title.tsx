import { ReactElement } from 'react'
import styles from '@styles/components/text/title.module.css'

export function Title({ name }: { name: string }): ReactElement {
  return <h1 className={styles.title}>{name}</h1>
}
