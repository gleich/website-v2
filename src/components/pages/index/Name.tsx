import GradientUnderline from '@components/GradientUnderline'

const Name = (): JSX.Element => (
  <>
    <style jsx>
      {`
        h1 {
          line-height: 115%;
          animation: light-up 5s ease-in 4s infinite;
        }

        @keyframes light-up {
          0% {
            text-shadow: none;
          }

          50% {
            text-shadow: 6px 4px 30px #ffffff5b;
          }

          100% {
            text-shadow: none;
          }
        }

        @media (prefers-color-scheme: light) {
          .name {
            animation: none;
          }
        }
      `}
    </style>
    <GradientUnderline direction="left" delay={2}>
      <h1>Matt Gleich</h1>
    </GradientUnderline>
  </>
)

export default Name
