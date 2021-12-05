import Route from '@components/Route'
import Section from './Section'

const Contact = (): JSX.Element => (
  <Section name="contact">
    I would love to hear from you! Email me at email at mattgleich.com or DM me
    on <Route href="https://twitter.com/matt_gleich">twitter</Route>. I&apos;ll
    get back to you as soon as possible but depending on the time of year I
    might be a little late to respond.
  </Section>
)

export default Contact
