const GradientUnderline = ({
  children,
  direction = 'right',
}: {
  children: React.ReactNode
  direction?: string
}): JSX.Element => (
  <>
    <style jsx>
      {`
        div {
          padding-bottom: 4px;
          position: relative;
          text-decoration: none;
        }

        div::after {
          background: white;
          background: linear-gradient(
            to ${direction},
            #fff 0%,
            rgb(20, 20, 20) 50%,
            transparent 100%
          );
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 100%;
        }

        @media (prefers-color-scheme: light) {
          div::after {
            background: linear-gradient(
              to ${direction},
              rgb(20, 20, 20) 0%,
              #fff 50%,
              transparent 100%
            );
          }
        }
      `}
    </style>
    <div>{children}</div>
  </>
)

export default GradientUnderline
