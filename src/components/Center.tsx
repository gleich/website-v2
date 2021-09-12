const Center = ({
  root,
  children,
}: {
  root?: boolean
  children: React.ReactNode
}): JSX.Element => (
  <>
    <style jsx>
      {`
        p {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          min-width: ${root ? '100vw' : 'min-content'};
          min-height: ${root ? '100vh' : 'min-content'};
        }
      `}
    </style>
    <p>{children}</p>
  </>
)

export default Center
