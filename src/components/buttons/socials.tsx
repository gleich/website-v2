import styles from '../../../styles/components/buttons/Socials.module.css'

const SocialMediaButton = ({
  name,
  icon,
  urls,
}: {
  name: string
  icon?: string
  urls: any
}) => {
  const lowerCaseName = name.toLowerCase()
  const iconName = icon == '' ? icon : lowerCaseName
  return (
    <a
      href={urls['data']['socials'][lowerCaseName]['url']}
      title={name}
      target="_blank"
    >
      <img
        className={styles.icon}
        src={`https://unpkg.com/simple-icons@v4/icons/${iconName}.svg`}
        alt={name}
      />
    </a>
  )
}

export default SocialMediaButton