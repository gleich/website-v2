import GradientUnderline from '@components/GradientUnderline'

const Top = (): JSX.Element => (
  <>
    <style jsx>
      {`
        .hey {
          font-family: Victor Mono, -apple-system, BlinkMacSystemFont, Segoe UI,
            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
          font-style: italic;
        }

        /* Used from https://jarv.is/notes/css-waving-hand-emoji/ */
        @keyframes wave-animation {
          0% {
            transform: rotate(0deg);
          }
          10% {
            transform: rotate(14deg);
          }
          20% {
            transform: rotate(-8deg);
          }
          30% {
            transform: rotate(14deg);
          }
          40% {
            transform: rotate(-4deg);
          }
          50% {
            transform: rotate(10deg);
          }
          60% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        .wave {
          animation-name: wave-animation;
          animation-duration: 2.5s;
          transform-origin: 70% 70%;
          display: inline-block;
          font-size: clamp(40px, 5.5vw, 60px);
          padding-right: clamp(17px, 3vw, 30px);
        }
      `}
    </style>
    <GradientUnderline>
      <h2>
        {' '}
        <span className="wave">👋🏼</span>
        <span className="hey">Hey! I&apos;m</span>
      </h2>
    </GradientUnderline>
  </>
)

export default Top
