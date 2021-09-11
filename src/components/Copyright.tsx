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
      `}
    </style>
    <p>{`© Matt Gleich ${time.date.getFullYear()}-${new Date().getFullYear()}`}</p>
  </>
)

export default Copyright
