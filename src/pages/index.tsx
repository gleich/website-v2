import Center from '@components/Center'
import Copyright from '@components/Copyright'
import Meta from '@components/Meta'
import { Flex, Heading, Text } from '@theme-ui/components'
import type { NextPage } from 'next'
import styles from '@styles/pages/index.module.css'

const Index: NextPage = () => {
  return (
    <>
      <Meta
        title="Matt Gleich"
        description="17-year-old open-source developer from New Hampshire"
      />
      <main>
        <Center root>
          <Flex sx={{ flexDirection: 'column' }}>
            <Text className={styles.hey}>Hey, I&apos;m</Text>
            <Heading>Matt Gleich</Heading>
          </Flex>
        </Center>
      </main>
      <footer>
        <Copyright />
      </footer>
    </>
  )
}

export default Index
