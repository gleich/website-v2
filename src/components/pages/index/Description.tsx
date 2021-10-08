import TextLoop from 'react-text-loop'
import time from '@data/time'

const Description = (): JSX.Element => (
  <>
    <style jsx>
      {`
        h4 {
          padding-top: 10px;
          text-align: center;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          font-style: normal;
        }

        @media screen and (min-width: 850px) {
          br {
            display: none;
          }

          h4 {
            text-align: left;
          }
        }
      `}
    </style>
    <h4>
      {time.full} <br />{' '}
      <TextLoop delay={700} mask>
        <span>developer 💻</span>
        <span>designer 🎨</span>
        <span>photographer 📷</span>
        <span>cyclist 🚴🏼</span>
        <a href="https://hackclub.com" target="_blank" rel="noreferrer">
          hackclubber 🦎
        </a>
      </TextLoop>
    </h4>
  </>
)

export default Description
