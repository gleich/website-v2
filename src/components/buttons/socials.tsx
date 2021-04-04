import { ReactElement } from 'react'
import styles from '../../styles/components/buttons/Socials.module.css'

export function SocialMediaButton({
  name,
  icon,
  socials,
}: {
  name: string
  icon?: string
  socials: Record<string, string>[]
}): ReactElement {
  const lowerCaseName = name.toLowerCase()
  const iconName = icon == '' ? icon : lowerCaseName
  const size = '30px'

  // Getting URL
  let url: string
  for (const account of socials) {
    if (account['name'] == lowerCaseName) {
      url = account['url']
    }
  }

  return (
    <a href={url} title={name} target="_blank" rel="noreferrer">
      <img
        className={styles.icon}
        src={`/images/socials/${iconName}.svg`}
        height={size}
        width={size}
        alt={name}
      />
    </a>
  )
}
