const Hey = (): JSX.Element => {
  return (
    <>
      <style jsx>
        {`
          p {
            padding-bottom: 4px;
            position: relative;
            text-decoration: none;
            font-size: clamp(45px, 5vw, 80px) !important;
          }

          p::after {
            background: white;
            background: linear-gradient(
              to right,
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
            p::after {
              background: linear-gradient(
                to right,
                rgb(20, 20, 20) 0%,
                #fff 50%,
                transparent 100%
              );
            }
          }
        `}
      </style>
      <p>Hey, I&apos;m</p>
    </>
  )
}

export default Hey
