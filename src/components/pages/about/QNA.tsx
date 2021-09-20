const QNA = ({
  question,
  children,
}: {
  question: string
  children: React.ReactNode
}): JSX.Element => (
  <>
    <style jsx>
      {`
        div {
          margin-left: 40px;
          margin-top: 10px;
        }

        p {
          margin-top: 20px;
        }
      `}
    </style>
    <p>{question}</p>
    <div>{children}</div>
  </>
)

export default QNA
