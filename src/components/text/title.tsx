import { ReactElement } from 'react'
import styled from 'styled-components'

const Style = styled.h1`
  font-size: 700%;
  text-decoration: underline;
  text-decoration-color: #00f396db;
`

export function Title({ name }: { name: string }): ReactElement {
  return <Style>{name}</Style>
}
