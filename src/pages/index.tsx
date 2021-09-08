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
      <main style={{ padding: '0 15px' }}>
        <Center root>
          <Flex sx={{ flexDirection: 'column' }}>
            <Text className={styles.hey} sx={{ fontSize: ['50px', '7vw'] }}>
              Hey, I&apos;m
            </Text>
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
