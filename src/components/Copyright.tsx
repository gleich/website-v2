import time from '@data/time'

const Copyright = (): JSX.Element => (
  <>
    <style jsx>
      {`
        p {
          position: fixed;
          bottom: 0;
          min-width: 100%;
          text-align: center;
          padding: 10px 0px;
        }

        .link {
          padding-left: 10px;
          display: inline-block;
        }
      `}
    </style>
    <p>
      {`© Matt Gleich ${time.date.getFullYear()}-${new Date().getFullYear()}`}{' '}
      <div className="link">
        <a
          href="https://github.com/gleich/website"
          target="_blank"
          rel="noreferrer"
        >
          gleich/website
        </a>
      </div>
    </p>
  </>
)

export default Copyright
