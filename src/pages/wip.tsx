import Button from '@components/Button'
import Center from '@components/Center'
import Copyright from '@components/Copyright'
import Glow from '@components/Glow'
import Meta from '@components/Meta'
import { NextPage } from 'next'

const WIP: NextPage = (): JSX.Element => (
  <>
    <style jsx>
      {`
        main {
          display: flex;
          flex-direction: column;
          align-items: center;

          text-align: center;
        }

        .buttons {
          padding-top: 30px;
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          min-width: 80px;
          justify-content: center;
          align-items: center;
        }

        @media screen and (max-width: 800px) {
          main {
            width: 90%;
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
        <h5>This page is a work in progress</h5>
        <div className="buttons">
          <Button href="/">Head Home</Button>
          <Button href="https://github.com/gleich/www">
            Follow Development
          </Button>
        </div>
      </main>
    </Center>
    <footer>
      <Copyright />
    </footer>
  </>
)

export default WIP
