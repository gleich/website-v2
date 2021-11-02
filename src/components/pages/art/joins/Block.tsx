const LogoBlock = ({
  index,
  total,
}: {
  index: number
  total: number
}): JSX.Element => {
  return (
    <>
      <style jsx>
        {`
          .block {
            border: solid 2px white;
            border-radius: ${index % 2 === 0 ? '30%' : '20%'};
            width: 100%;
            height: 100%;
            grid-column: 1;
            grid-row: 1;
            transform: rotate(${(360 / total) * index + 1}deg);
            animation: spin 10s infinite forwards alternate;
            animation-delay: 2s;
          }

          .block:after {
            position: absolute;
            left: 0;
            top: 50%;
            height: 1px;
            background: white;
            content: '';
            display: block;
            animation: extend 10s infinite alternate;
            animation-delay: 2s;
          }

          @keyframes spin {
            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(
                ${index % 2 === 1 ? '-' : ''} ${(360 / total) * index + 1}deg
              );
            }
          }

          @keyframes extend {
            from {
              width: 0%;
            }

            to {
              width: 100%;
            }
          }

          @keyframes fadeIn {
            0% {
              opacity: 10%;
            }

            50% {
              opacity: 100%;
            }

            100% {
              opacity: 10%;
            }
          }

          @media (prefers-color-scheme: light) {
            .block {
              border: solid 2px black;
            }

            .block:after {
              background: black;
            }
          }
        `}
      </style>
      <div className="block" />
    </>
  )
}

export default LogoBlock
