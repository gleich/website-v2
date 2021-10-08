import GradientUnderline from '@components/GradientUnderline'
import Glow from '@components/Glow'

const Name = (): JSX.Element => (
  <>
    <style jsx>
      {`
        h1 {
          line-height: 115%;
          text-align: center;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          font-style: normal;
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
