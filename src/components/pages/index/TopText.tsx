import time from '@data/time'
import TextLoop from 'react-text-loop'

const TopText = (): JSX.Element => (
  <>
    <style jsx>
      {`
        .topText {
          display: flex;
          flex-direction: column;
        }

        .description {
          display: flex;
          flex-direction: row;
        }

        .age {
          padding-right: 10px;
        }

        @media screen and (max-width: 1000px) {
          .topText {
            align-items: center;
          }

          .description > h5 {
            display: block;
            text-align: center;
          }
        }
      `}
    </style>
    <div className="topText">
      <h1>Matt Gleich</h1>
      <div className="description">
        <h5 className="age">{time.full}</h5>
        <TextLoop>
          <h5>developer</h5>
          <h5>photographer</h5>
          <h5>cyclist</h5>
          <h5>hackclubber</h5>
          <h5>student</h5>
        </TextLoop>
      </div>
    </div>
  </>
)

export default TopText
