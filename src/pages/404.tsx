import Center from '@components/Center'
import Glow from '@components/Glow'
import Meta from '@components/Meta'
import { NextPage } from 'next'
import Image from 'next/image'

const NotFound: NextPage = (): JSX.Element => (
  <>
    <style jsx>
      {`
        main {
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        .gex {
          padding-right: 30px;
        }

        .status-code {
          font-family: Victor Mono, -apple-system, BlinkMacSystemFont, Segoe UI,
            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
          font-feature-settings: 'ss01';
          background-color: white;
          color: black;
          width: min-content;
          line-height: 100%;
        }

        @media (prefers-color-scheme: light) {
          .status-code {
            background-color: black;
            color: white;
          }
        }

        @media screen and (max-width: 700px) {
          main {
            flex-direction: column;
          }

          .status-code {
            margin-top: 50px;
          }
        }
      `}
    </style>
    <Meta
      title="Requested page not found"
      description="The requested page doesn't exist"
    />
    <Center root>
      <main>
        <div className="gex">
          <Image src="/images/gex.png" height="336" width="278" />
        </div>
        <Glow>
          <h2 className="status-code">
            <span>404</span>
          </h2>{' '}
          <br />
          <h4>
            Requested page doesn&apos;t exist. <br /> Have gex the lizard
            instead.
          </h4>
        </Glow>
      </main>
    </Center>
  </>
)

export default NotFound
