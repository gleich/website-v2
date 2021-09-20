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

        @media screen and (min-width: 850px) {
          br {
            display: none;
          }
        }
      `}
    </style>
    <GradientUnderline direction="left" delay={2}>
      <Glow>
        <h1>
          Matt <br /> Gleich
        </h1>
      </Glow>
    </GradientUnderline>
  </>
)

export default Name
