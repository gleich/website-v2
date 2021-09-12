import Center from '@components/Center'
import Copyright from '@components/Copyright'
import GradientUnderline from '@components/GradientUnderline'
import Meta from '@components/Meta'
import getSocials from '@data/socials'
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'

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
      <main>
        <Center root>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <GradientUnderline>
              <h2>Hey! I&apos;m</h2>
            </GradientUnderline>
            <GradientUnderline direction="left" delay={2}>
              <h1>Matt Gleich</h1>
            </GradientUnderline>
          </div>
        </Center>
      </main>
      <footer>
        <Copyright />
      </footer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const accounts = await getSocials()
  return {
    props: { accounts },
    revalidate: 3600,
  }
}

export default Index
