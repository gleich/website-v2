import Button from '@components/Button'
import Center from '@components/Center'
import Glow from '@components/Glow'
import Meta from '@components/Meta'
import { NextPage } from 'next'

const WIP: NextPage = (): JSX.Element => (
  <>
    <style jsx>
      {`
        .button {
          padding-top: 30px;
        }
        main {
          display: flex;
          flex-direction: column;
        }
        @media screen and (max-width: 800px) {
          main {
            align-items: center;
            width: 90%;
            text-align: center;
          }
        }
      `}
    </style>
    <Meta title="Work in progress" description="I'm working on this page" />
    <Center root>
      <main>
        <Glow>
          <h1>W.I.P</h1>
        </Glow>
        <h4>This page is a work in progress</h4>
        <div className="button">
          <Button href="/">Head Home</Button>
        </div>
      </main>
    </Center>
  </>
)

export default WIP
