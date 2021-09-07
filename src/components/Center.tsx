const Center = ({
  root,
  children,
}: {
  root?: boolean
  children: React.ReactNode
}): JSX.Element => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: root ? '100vw' : 'min-content',
        minHeight: root ? '100vh' : 'min-content',
      }}
    >
      {children}
    </div>
  )
}

export default Center
