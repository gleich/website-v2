import Center from '@components/Center'
import Meta from '@components/Meta'
import type { NextPage } from 'next'
import time from '@data/time'
import Logo from '@components/Logo'
import TopText from '@components/pages/index/TopText'
import Socials from '@components/pages/index/Socials'
import Arrows from '@components/pages/index/Arrows'

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
          width: 100vw;
        }

        .nameAndSocials {
          display: flex;
          flex-direction: column;
          margin-left: 100px;
        }

        .arrows {
          bottom: 20px;
          position: absolute;
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

        @media screen and (max-height: 670px) {
          .arrows {
            background-color: var(--darkmode-background);
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            bottom: 0;
            padding-top: 10px;
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
          <div className="arrows">
            <Arrows />
          </div>
        </div>
      </main>
    </Center>
  </>
)

export default Index
