import Center from '@components/Center'
import Copyright from '@components/Copyright'
import Meta from '@components/Meta'
import getSocials from '@data/socials'
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Top from '@components/pages/index/Top'
import Name from '@components/pages/index/Name'
import Description from '@components/pages/index/Description'

const Index: NextPage = ({
  accounts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(accounts)
  return (
    <>
      <Meta
        title="Matt Gleich"
        description="17-year-old open-source developer from New Hampshire"
      />
      <style jsx>
        {`
          .left {
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
      <main>
        <Center root>
          <div className="left">
            <Top />
            <Name />
            <Description />
          </div>
        </Center>
      </main>
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
