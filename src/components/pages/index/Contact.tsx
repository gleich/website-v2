import Route from '@components/Route'
import Section from './Section'

const Contact = (): JSX.Element => (
  <Section name="contact">
    Email me at email at mattgleich.com or reach out to me on{' '}
    <Route href="https://twitter.com/matt_gleich">my twitter</Route>.
  </Section>
)

export default Contact
