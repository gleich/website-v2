const Section = ({
  name,
  children,
}: {
  name: string
  children: React.ReactNode
}): JSX.Element => {
  return (
    <>
      <style jsx>
        {`
          .section {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
            padding: 0 20px;
          }

          .name {
            margin-bottom: 20px;
          }

          .children {
            max-width: 800px;
          }
        `}
      </style>
      <div className="section">
        <h3 className="name">{name}</h3>
        <div className="children">{children}</div>
      </div>
    </>
  )
}

export default Section
