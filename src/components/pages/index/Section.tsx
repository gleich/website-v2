import { CSSProperties } from 'react'

const Section = ({
  name,
  style,
  children,
}: {
  name: string
  style?: CSSProperties
  children: React.ReactNode
}): JSX.Element => {
  return (
    <>
      <style jsx>
        {`
          .section {
            display: flex;
            flex-direction: column;
            margin: 50px 0;
          }

          .name {
            margin-bottom: 20px;
          }

          .children {
            max-width: 800px;
          }
        `}
      </style>
      <div className="section" style={style ?? {}}>
        <h3 className="name">{name}</h3>
        <div className="children">{children}</div>
      </div>
    </>
  )
}

export default Section
