import GradientUnderline from '@components/GradientUnderline'
import Glow from '@components/Glow'

const Name = (): JSX.Element => (
  <>
    <style jsx>
      {`
        h1 {
          line-height: 115%;
          text-align: center;
        }
      `}
    </style>
    <GradientUnderline direction="left" delay={2}>
      <Glow>
        <h1>Matt Gleich</h1>
      </Glow>
    </GradientUnderline>
  </>
)

export default Name
