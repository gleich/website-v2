import Center from '@components/Center'
import Meta from '@components/Meta'
import type { NextPage } from 'next'
import time from '@data/time'
import Logo from '@components/Logo'
import TopText from '@components/pages/index/TopText'
import Socials from '@components/pages/index/Socials'
import Arrows from '@components/pages/index/Arrows'
import Intro from '@components/pages/index/Intro'

const Index: NextPage = () => (
  <>
    <Meta
      title="Matt Gleich"
      description={time.full + ' open-source developer from New Hampshire'}
    />
    <style jsx>
      {`
        .top {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 99vw;
          height: 100vh;
        }

        .body {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 99vw;
          flex-direction: column;
          margin-bottom: 50px;
        }

        .nameAndSocials {
          display: flex;
          flex-direction: column;
          margin-left: 100px;
        }

        @media screen and (max-width: 1000px) {
          .top {
            flex-direction: column;
          }

          .nameAndSocials {
            align-items: center;
            margin-left: 0;
            margin-top: 2vh;
          }
        }
      `}
    </style>
    <Center root>
      <main>
        <div className="top">
          <Logo />
          <div className="nameAndSocials">
            <TopText />
            <Socials />
          </div>
          <Arrows />
        </div>
        <div className="body">
          <Intro />
        </div>
      </main>
    </Center>
  </>
)

export default Index
