import time from '@data/time'
import { Text } from '@theme-ui/components'

const Copyright = (): JSX.Element => (
  <div>
    <Text
      style={{
        position: 'fixed',
        bottom: 0,
        minWidth: '100vw',
        textAlign: 'center',
        paddingBottom: '10px',
        paddingTop: '10px',
      }}
    >{`© Matt Gleich ${time.date.getFullYear()}-${new Date().getFullYear()}`}</Text>
  </div>
)

export default Copyright
