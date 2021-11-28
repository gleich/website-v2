import NextLink from 'next/link'

const Route = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}): JSX.Element => (
  <>
    <style jsx>
      {`
        .link {
          display: inline-flex;
          align-items: center;
        }

        .icon {
          height: 20px;
          width: 20px;
          margin-left: 5px;
        }
      `}
    </style>

    <span className="link">
      {href.toString().startsWith('/') ? (
        <NextLink href={href}>{children}</NextLink>
      ) : (
        <>
          <a href={href.toString()} target="_blank" rel="noreferrer">
            {children}
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </>
      )}
    </span>
  </>
)

export default Route
