const Socials = (): JSX.Element => {
  return (
    <>
      <style jsx>
        {`
          .socials {
            display: flex;
            flex-direction: row;
            margin-top: 5px;
            gap: 10px;
            align-items: center;
          }

          a {
            color: var(--foreground);
          }

          a:visited {
            color: var(--foreground);
          }

          a:hover svg {
            fill: var(--foreground);
          }
        `}
      </style>
      <div className="socials fadeUpAnimation">
        <a
          href="https://twitter.com/matt_gleich"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.75 3.75C27.553 4.59435 26.2276 5.24014 24.825 5.6625C24.0722 4.79689 23.0717 4.18337 21.9588 3.90491C20.8459 3.62645 19.6744 3.69649 18.6026 4.10557C17.5308 4.51464 16.6106 5.243 15.9662 6.19215C15.3219 7.14129 14.9846 8.26542 15 9.4125V10.6625C12.8033 10.7195 10.6266 10.2323 8.66376 9.24431C6.70093 8.25635 5.0129 6.79829 3.75 5C3.75 5 -1.25 16.25 10 21.25C7.42566 22.9975 4.35895 23.8737 1.25 23.75C12.5 30 26.25 23.75 26.25 9.375C26.2488 9.02682 26.2154 8.67949 26.15 8.3375C27.4258 7.07937 28.326 5.49089 28.75 3.75V3.75Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/matt-gleich"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 10C21.9891 10 23.8968 10.7902 25.3033 12.1967C26.7098 13.6032 27.5 15.5109 27.5 17.5V26.25H22.5V17.5C22.5 16.837 22.2366 16.2011 21.7678 15.7322C21.2989 15.2634 20.663 15 20 15C19.337 15 18.7011 15.2634 18.2322 15.7322C17.7634 16.2011 17.5 16.837 17.5 17.5V26.25H12.5V17.5C12.5 15.5109 13.2902 13.6032 14.6967 12.1967C16.1032 10.7902 18.0109 10 20 10V10Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.5 11.25H2.5V26.25H7.5V11.25Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 7.5C6.38071 7.5 7.5 6.38071 7.5 5C7.5 3.61929 6.38071 2.5 5 2.5C3.61929 2.5 2.5 3.61929 2.5 5C2.5 6.38071 3.61929 7.5 5 7.5Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <a href="https://github.com/gleich" target="_blank" rel="noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-github"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
      </div>
    </>
  )
}

export default Socials
