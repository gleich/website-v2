import Center from '@components/Center'
import Copyright from '@components/Copyright'
import Meta from '@components/Meta'
import getSocials, { SocialMediaAccount } from '@data/socials'
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Top from '@components/pages/index/Top'
import Name from '@components/pages/index/Name'
import Description from '@components/pages/index/Description'
import AccountIcon from '@components/pages/index/AccountIcon'

const Index: NextPage = ({
  accounts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Meta
        title="Matt Gleich"
        description="17-year-old open-source developer from New Hampshire"
      />
      <style jsx>
        {`
          main {
            display: flex;
            flex-direction: row;
            align-items: center;
          }

          .left {
            display: flex;
            flex-direction: column;
          }

          .accounts {
            display: flex;
            flex-direction: column;
            margin-left: 3vw;
            margin-top: 4.5vh;
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
      <Center root>
        <main>
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
        </main>
      </Center>
      <footer>
        <Copyright />
      </footer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => ({
  props: { accounts: await getSocials() },
  revalidate: 300, // Every five minutes
})

export default Index
