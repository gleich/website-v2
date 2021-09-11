import Center from '@components/Center'
import Copyright from '@components/Copyright'
import GradientUnderline from '@components/GradientUnderline'
import Meta from '@components/Meta'
import type { NextPage } from 'next'

const Index: NextPage = () => (
  <>
    <Meta
      title="Matt Gleich"
      description="17-year-old open-source developer from New Hampshire"
    />
    <main>
      <Center root>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <GradientUnderline>
            <h2>Hey there, I&apos;m</h2>
          </GradientUnderline>
          <GradientUnderline direction="left" delay={3}>
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

export default Index
