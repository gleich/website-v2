import TextLoop from 'react-text-loop'
import time from '@data/time'

const Description = (): JSX.Element => (
  <>
    <style jsx>
      {`
        h4 {
          padding-top: 10px;
        }
      `}
    </style>
    <h4>
      {time.full}{' '}
      <TextLoop delay={700} mask>
        <span>developer</span>
        <span>photographer</span>
        <span>cyclist</span>
        <a href="https://hackclub.com" target="_blank" rel="noreferrer">
          hackclubber
        </a>
      </TextLoop>
    </h4>
  </>
)

export default Description
