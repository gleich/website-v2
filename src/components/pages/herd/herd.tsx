import { ReactElement } from 'react'
import styled, { keyframes } from 'styled-components'

const rotatingAnimation = keyframes`
  from {
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
`

const Emoji = styled.div`
  animation: ${rotatingAnimation} 4s linear infinite;
  -webkit-animation: ${rotatingAnimation} 4s linear infinite;
  font-size: 2rem;
`

const Herd = styled.div`
  display: inline-flex;
  flex-direction: column;
`

export function HerdOfEmojis(): ReactElement {
  const emojis = ['🐢', '🐄', '🦎']
  const column: JSX.Element[] = []
  for (let i = 0; i < 9; i++) {
    const emoji = emojis[Math.floor(Math.random() * Math.floor(emojis.length))]
    column.push(<Emoji>{emoji}</Emoji>)
  }
  return <Herd>&nbsp;{column}</Herd>
}
