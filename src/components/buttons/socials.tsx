import { ReactElement } from 'react'
import styles from '../../styles/components/buttons/Socials.module.css'

const SocialMediaButton = ({
  name,
  icon,
  urls,
}: {
  name: string
  icon?: string
  urls: Record<string, Record<string, Record<string, Record<string, string>>>>
}): ReactElement => {
  const lowerCaseName = name.toLowerCase()
  const iconName = icon == '' ? icon : lowerCaseName
  const size = '30px'
  return (
    <a
      href={urls['data']['socials'][lowerCaseName]['url']}
      title={name}
      target="_blank"
      rel="noreferrer"
    >
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

export default SocialMediaButton
