import { ReactElement } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const LinkStyle = styled.div`
  font-size: 1.5rem;
`

export function BackToIndex(): ReactElement {
  return (
    <LinkStyle>
      <Link href="/">← Back to the mainland</Link>
    </LinkStyle>
  )
}
