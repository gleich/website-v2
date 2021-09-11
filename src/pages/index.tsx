import Center from '@components/Center'
import Copyright from '@components/Copyright'
import Meta from '@components/Meta'
import Hey from '@components/pages/index/Hey'
import type { NextPage } from 'next'

const Index: NextPage = () => {
  return (
    <>
      <Meta
        title="Matt Gleich"
        description="17-year-old open-source developer from New Hampshire"
      />
      <main>
        <Center root>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Hey />
            <h1>Matt Gleich</h1>
          </div>
        </Center>
      </main>
      <footer>
        <Copyright />
      </footer>
    </>
  )
}

export default Index
