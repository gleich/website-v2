import Center from '@components/Center'
import Meta from '@components/Meta'
import { NextPage } from 'next'
import Logo from '@components/Logo'

const LogoPage: NextPage = () => (
  <>
    <Meta title="Matt Gleich's Logo" description="Just my logo" />
    <Center root>
      <main>
        <Logo />
      </main>
    </Center>
  </>
)

export default LogoPage
