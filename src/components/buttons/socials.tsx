import { ReactElement } from 'react'
import styled from 'styled-components'

const Icon = styled.img`
  filter: invert(100%) saturate(0%);
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: 5vw;
  width: auto;

  @media screen and (min-width: 800px) {
    height: 2rem;
    width: auto;
  }
`

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

  // Getting URL
  let url: string
  for (const account of socials) {
    if (account['name'] == lowerCaseName) {
      url = account['url']
    }
  }

  return (
    <a href={url} title={name} target="_blank" rel="noreferrer">
      <Icon src={`/images/socials/${iconName}.svg`} alt={name} />
    </a>
  )
}
