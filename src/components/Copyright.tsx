import time from '@data/time'
import { Text } from '@theme-ui/components'

const Copyright = (): JSX.Element => (
  <div>
    <Text
      sx={{
        position: 'fixed',
        bottom: 0,
        minWidth: '100%',
        textAlign: 'center',
        paddingBottom: '10px',
        paddingTop: '10px',
        backgroundColor: 'background',
      }}
    >{`© Matt Gleich ${time.date.getFullYear()}-${new Date().getFullYear()}`}</Text>
  </div>
)

export default Copyright
