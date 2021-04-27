import Link from 'next/link'
import styles from '@styles/components/buttons/page.module.css'
import { ReactElement } from 'react'

export function PageButton({
  path,
  name,
}: {
  path: string
  name: string
}): ReactElement {
  return (
    <Link href={path}>
      <button className={styles.button}>{name}</button>
    </Link>
  )
}
