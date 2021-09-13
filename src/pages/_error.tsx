import Center from '@components/Center'
import Glow from '@components/Glow'
import Meta from '@components/Meta'
import { NextPageContext } from 'next'
import Image from 'next/image'

const Error = ({ statusCode }: { statusCode: number }): JSX.Element => {
  const msg = statusCode ? ' error occurred' : 'Error occurred on client'
  return (
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
            font-family: Victor Mono, -apple-system, BlinkMacSystemFont,
              Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
              Helvetica Neue, sans-serif;
            font-feature-settings: 'ss01';
            background-color: white;
            color: black;
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
          }
        `}
      </style>
      <Meta title={msg} description={msg} />
      <Center root>
        <main>
          <div className="gex">
            <Image src="/images/gex.png" height="336" width="278" />
          </div>
          <Glow>
            <h4>
              <span className="status-code">{statusCode}</span>
              {msg}. <br /> Have gex the lizard instead.
            </h4>
          </Glow>
        </main>
      </Center>
    </>
  )
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
