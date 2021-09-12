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
          height: 2px;
          width: 100%;
          animation: fade 1.5s ease-in-out forwards;
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
          }
          to {
            opacity: 100%;
          }
        }
      `}
    </style>
    <div>{children}</div>
  </>
)

export default GradientUnderline
