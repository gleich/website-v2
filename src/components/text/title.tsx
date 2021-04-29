import { ReactElement } from 'react'
import styles from '@styles/components/text/title.module.css'

export function Title({
  className,
  name,
}: {
  className?: string
  name: string
}): ReactElement {
  console.log(className == null ? '' : className)
  return (
    <div className={className == null ? '' : className}>
      <h1 className={styles.title}>{name}</h1>
    </div>
  )
}
