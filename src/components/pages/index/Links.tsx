import { nanoid } from 'nanoid'
import Section from './Section'
import Link from 'next/link'
import { useState } from 'react'

const Links = (): JSX.Element => {
  const [routeDescription, setRouteDescription] = useState(
    'Travel somewhere...'
  )
  const routes: Record<string, string> = {
    about: 'Get to know me a little',
    projects: 'My projects',
    photography: 'My photography work',
    blog: 'Articles I write from time to time',
    skills: 'My skills in the world of programming, photography, and design',
  }

  return (
    <>
      <style jsx global>
        {`
          .indexRoutesContainer {
            display: flex;
            align-items: center;
            flex-direction: column;
            margin-right: 30px;
          }

          .indexRoutes {
            margin-top: 100px;
            display: flex;
            height: min-content;
            width: min-content;
          }

          .indexRoute {
            width: 20px;
            white-space: nowrap;
            text-align: left;
            width: 60px;
            transform: rotate(-30deg);
            text-orientation: sideways-right;
          }

          .indexRouteIcon {
            width: 19px;
            height: auto;
          }

          .indexRoute > a {
            font-size: 1.4rem;
          }

          .indexRouteDescription {
            margin-top: 50px;
          }
        `}
      </style>
      <Section name="routes">
        <div className="indexRoutesContainer">
          <div className="indexRoutes">
            {Object.keys(routes).map((r: string) => (
              <p
                className="indexRoute"
                key={nanoid()}
                onMouseEnter={() => setRouteDescription(routes[r])}
                onMouseLeave={() => setRouteDescription('Travel somewhere...')}
              >
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
                  className="indexRouteIcon"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>{' '}
                <Link href={'/' + r}>{r}</Link>
              </p>
            ))}
          </div>
          <p className="indexRouteDescription">
            {routeDescription ? routeDescription : <>&nbsp;</>}
          </p>
        </div>
      </Section>
    </>
  )
}

export default Links
