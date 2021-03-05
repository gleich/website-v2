import styles from '../../../styles/components/buttons/Socials.module.css'

const SocialMediaButton = ({
  name,
  icon,
  url,
}: {
  name: string
  icon: string
  url: string
}) => (
  <a href={url} title={name} target="_blank">
    <img
      className={styles.icon}
      src={`https://unpkg.com/simple-icons@v4/icons/${icon}.svg`}
      height="32"
      width="32"
    ></img>
  </a>
)

export default SocialMediaButton
