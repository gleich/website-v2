import time from '@data/time'

const Copyright = ({ repoLink }: { repoLink?: boolean }): JSX.Element => (
  <>
    <style jsx>
      {`
        p {
          position: fixed;
          bottom: 0;
          min-width: 100%;
          text-align: center;
          padding: 10px 0px;
          font-size: 17px;
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
