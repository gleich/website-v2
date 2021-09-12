import Center from '@components/Center'
import Copyright from '@components/Copyright'
import GradientUnderline from '@components/GradientUnderline'
import Meta from '@components/Meta'
import getSocials from '@data/socials'
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import styles from '@styles/index.module.css'

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
          <div className={styles.left}>
            <GradientUnderline>
              <h2>
                {' '}
                <span className={styles.wave}>👋🏼</span>
                <span className={styles.hey}>Hey! I&apos;m</span>
              </h2>
            </GradientUnderline>
            <GradientUnderline direction="left" delay={2}>
              <h1 className={styles.name}>Matt Gleich</h1>
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

export const getStaticProps: GetStaticProps = async () => ({
  props: { accounts: await getSocials() },
  revalidate: 300, // Every five minutes
})

export default Index
