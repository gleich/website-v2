import Link from 'next/link'
import { ReactElement } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background-color: white;
  border: 0;
  font-size: 1.2rem;
  padding: 0.5em;
  font-family: 'Victor Mono';

  &:hover {
    background-color: #00f396db;
    color: white;
    cursor: pointer;
  }
`

export function PageButton({
  path,
  name,
}: {
  path: string
  name: string
}): ReactElement {
  return (
    <Link href={path}>
      <Button>{name}</Button>
    </Link>
  )
}
