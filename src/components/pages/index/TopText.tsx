import time from '@data/time'

const TopText = (): JSX.Element => (
  <>
    <style jsx>
      {`
        .topText {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          margin-left: 100px;
        }

        .description > h5 {
          display: inline-block;
        }

        .age {
          padding-right: 10px;
        }

        @media screen and (max-width: 1000px) {
          .topText {
            align-items: center;
            margin-left: 0;
            margin-top: 2vh;
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
        {/* Problem with spacing */}
        <h5>software developer</h5>
      </div>
    </div>
  </>
)

export default TopText
