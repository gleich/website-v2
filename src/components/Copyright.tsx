import time from '@data/time'

const Copyright = ({
  repoLink,
  stick,
}: {
  repoLink?: boolean
  stick?: boolean
}): JSX.Element => (
  <>
    <style jsx>
      {`
        p {
          position: ${stick ? 'fixed' : 'block'};
          bottom: 0;
          min-width: 100%;
          text-align: center;
          padding: 10px 0px;
          font-size: 1.0625rem;
          background-color: black;
        }

        a {
          padding-left: 10px;
          ${repoLink ? 'display: inline-block' : 'display: none'}
        }

        @media (prefers-color-scheme: light) {
          p {
            background-color: white;
          }
        }
      `}
    </style>
    <p>
      &copy; Matt Gleich {time.bday.year()}-{new Date().getFullYear()}{' '}
      <a href="https://github.com/gleich/www" target="_blank" rel="noreferrer">
        gleich/www
      </a>
    </p>
  </>
)

export default Copyright
