import Route from '@components/Route'

const Copyright = (): JSX.Element => (
  <>
    <style jsx>
      {`
        .repoLink {
          padding-left: 30px;
        }
      `}
    </style>
    <p>
      &copy; 2004-{new Date().getFullYear()} Matt Gleich{' '}
      <span className="repoLink">
        <Route href="https://github.com/gleich/www">gleich/www</Route>
      </span>
    </p>
  </>
)

export default Copyright
