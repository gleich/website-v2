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
        div {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0;
          min-width: ${root ? '100vw' : 'min-content'};
          min-height: ${root ? '100vh' : 'min-content'};
        }
      `}
    </style>
    <div>{children}</div>
  </>
)

export default Center
