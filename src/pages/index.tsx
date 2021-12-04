import Center from '@components/Center'
import Meta from '@components/Meta'
import type { NextPage } from 'next'
import time from '@data/time'
import Logo from '@components/Logo'
import TopText from '@components/pages/index/TopText'
import Socials from '@components/pages/index/Socials'
import Arrows from '@components/pages/index/Arrows'
import Intro from '@components/pages/index/Intro'
import Routes from '@components/pages/index/Routes'
import Stack from '@components/pages/index/Stack'
import Photos from '@components/pages/index/Photos'
import Contact from '@components/pages/index/Contact'
import Copyright from '@components/pages/index/Copyright'

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
          width: 100%;
          height: 100vh;
        }

        main {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 98vw;
          flex-direction: column;
        }

        .nameAndSocials {
          display: flex;
          flex-direction: column;
          margin-left: 100px;
        }

        .copyright {
          bottom: 0;
          width: 100%;
          text-align: center;
          padding-bottom: 30px;
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

          main {
            width: 90vw;
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
            <Routes />
          </div>
          <Arrows />
        </div>
        <div className="body">
          <Intro />
          <Contact />
          <Stack />
          <Photos />
        </div>
        <div className="copyright">
          <Copyright />
        </div>
      </main>
    </Center>
  </>
)

export default Index
