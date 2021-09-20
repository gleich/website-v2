import Link from 'next/link'

const Button = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}): JSX.Element => (
  <>
    <style jsx>
      {`
        button {
          background-color: white;
          color: black;
          cursor: pointer;
          border: none;
          height: min-content;
          transition: right 0.5s;
          padding: 10px 20px;
          border-radius: 8px;
          text-align: center;
        }

        .div {
          color: black;
        }

        button span {
          cursor: pointer;
          display: inline-block;
          position: relative;
          transition: 0.5s;
        }

        span:after {
          content: '»';
          position: absolute;
          color: black;
          opacity: 0;
          top: 0;
          right: -10px;
          transition: 0.5s;
        }

        @media (hover: hover) {
          button:hover span {
            padding-right: 20px;
          }

          button:hover span:after {
            opacity: 1;
            right: 0;
          }
        }

        @media (prefers-color-scheme: light) {
          span:after {
            color: white;
          }

          button {
            background-color: black;
            color: white;
          }
        }
      `}
    </style>
    {!href.startsWith('http') ? (
      <Link href={href}>
        <button>
          <span>{children} </span>
        </button>
      </Link>
    ) : (
      <a href={href} target="_blank" rel="noreferrer">
        <button>
          <span>{children} </span>
        </button>
      </a>
    )}
  </>
)

export default Button
