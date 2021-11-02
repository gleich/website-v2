import Center from '@components/Center'
import Meta from '@components/Meta'
import LogoBlock from '@components/pages/art/joins/Block'
import { nanoid } from 'nanoid'
import { NextPage } from 'next'
import Link from 'next/link'

const Logo: NextPage = (): JSX.Element => {
  const squares = 50

  const blocks: JSX.Element[] = []
  for (let i = 0; i < squares; i++) {
    blocks.push(<LogoBlock key={nanoid()} index={i} total={squares} />)
  }

  return (
    <>
      <style jsx>
        {`
          .stack {
            display: grid;
            width: fit-content;
            min-height: 50vh;
            min-width: 50vw;
            padding: 20px;
          }

          main {
            max-height: 98vh;
          }

          p {
            position: absolute;
            right: 20px;
            bottom: 20px;
          }
        `}
      </style>
      <Meta title="Joins" description="Generative art piece by Matt Gleich" />
      <Center root>
        <main>
          <div className={'stack'}>{blocks}</div>
          <p>
            Joins by <Link href="/">Matt Gleich</Link>
          </p>
        </main>
      </Center>
    </>
  )
}

export default Logo
