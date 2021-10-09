import Center from '@components/Center'
import Copyright from '@components/Copyright'
import Meta from '@components/Meta'
import getSocials, { SocialMediaAccount } from '@data/socials'
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Top from '@components/pages/index/Top'
import Name from '@components/pages/index/Name'
import Description from '@components/pages/index/Description'
import AccountIcon from '@components/pages/index/AccountIcon'
import time from '@data/time'
import Button from '@components/Button'

const Index: NextPage = ({
  accounts,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <style jsx>
      {`
        main {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .top {
          display: flex;
          flex-direction: row;
        }

        .left {
          display: flex;
          flex-direction: column;
        }

        .right {
          display: flex;
          flex-direction: row;
          flex-direction: row;
          align-items: center;
        }

        .accounts {
          display: flex;
          flex-direction: column;
          margin-left: 3vw;
          margin-top: 4.5vh;
        }

        .links {
          margin-top: 4vh;
          display: flex;
          flex-wrap: wrap;
          align-items: space-between;
          gap: 20px;
          justify-content: center;
          flex-basis: 25%;
        }

        .accounts > div {
          margin-bottom: 15px !important;
        }

        .accounts:first-child {
          margin-bottom: 0 !important;
        }

        @media screen and (max-width: 850px) {
          main {
            flex-direction: column;
            align-items: center;
            margin-bottom: 10vh;
          }

          .links {
            width: 80vw;
          }

          .top {
            flex-direction: column;
            margin-top: 10vh;
          }

          .right {
            justify-content: center;
          }

          .accounts {
            flex-direction: row;
          }

          .accounts > div {
            margin-right: 20px !important;
            margin-bottom: 0;
          }

          .accounts:first-child {
            margin-right: 0 !important;
          }
        }
      `}
    </style>
    <Meta
      title="Matt Gleich"
      description={time.full + ' open-source developer from New Hampshire'}
    />
    <Center root>
      <main>
        <div className="top">
          <div className="left">
            <Top />
            <Name />
            <Description />
          </div>
          <div className="right">
            <div className="accounts">
              {accounts.map((account: SocialMediaAccount) => (
                <div key={account.name}>
                  <AccountIcon {...account} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="links">
          <Button href="/about">About</Button>
          <Button href="https://github.com/gleich?tab=repositories">
            Projects
          </Button>
          <Button href="https://lightroom.adobe.com/shares/e96b417d28384fe7b26b54b8809f5d08">
            Photography
          </Button>
          <Button href="/blog">Blog</Button>
          <Button href="/wip">Skills</Button>
        </div>
      </main>
    </Center>
    <footer>
      <Copyright repoLink />
    </footer>
  </>
)

export const getStaticProps: GetStaticProps = async () => ({
  props: { accounts: await getSocials() },
  revalidate: 300, // Every five minutes
})

export default Index
