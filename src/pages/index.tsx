import Center from '@components/Center'
import Meta from '@components/Meta'
import { Text } from '@theme-ui/components'
import type { NextPage } from 'next'

const Index: NextPage = () => {
  return (
    <>
      <Meta
        title="Matt Gleich"
        description="17-year-old open-source developer from New Hampshire"
      />
      <Center root>
        <Text>Hello World</Text>
      </Center>
    </>
  )
}

export default Index
