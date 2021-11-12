import Center from '@components/Center'
import Meta from '@components/Meta'
import getSocials from '@data/socials'
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import time from '@data/time'
import Logo from '@components/Logo'
import TopText from '@components/pages/index/TopText'

const Index: NextPage = ({
  accounts,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
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
        }

        @media screen and (max-width: 1000px) {
          .top {
            flex-direction: column;
          }
        }
      `}
    </style>
    <Center root>
      <main>
        <div className="top">
          <Logo />
          <TopText />
        </div>
      </main>
    </Center>
  </>
)

export const getStaticProps: GetStaticProps = async () => ({
  props: { accounts: await getSocials() },
  revalidate: 300, // Every five minutes
})

export default Index
