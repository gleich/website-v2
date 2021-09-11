const GradientUnderline = ({
  children,
  direction = 'right',
  delay = 0,
}: {
  children: React.ReactNode
  direction?: string
  delay?: number
}): JSX.Element => (
  <>
    <style jsx>
      {`
        div {
          position: relative;
          text-decoration: none;
        }

        div::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          height: 1px;
          width: 100%;
          animation: fade 1.5s linear forwards;
          animation-delay: ${delay}s;
          opacity: 0;
          background: linear-gradient(to ${direction}, white, black);
        }

        @media (prefers-color-scheme: light) {
          div::after {
            background: linear-gradient(to ${direction}, black, white);
          }
        }

        @keyframes fade {
          from {
            opacity: 0;
            transform: 30px;
          }
          to {
            opacity: 100%;
            transform: 0px;
          }
        }
      `}
    </style>
    <div>{children}</div>
  </>
)

export default GradientUnderline
