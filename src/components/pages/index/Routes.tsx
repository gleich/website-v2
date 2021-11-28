import { nanoid } from 'nanoid'
import Section from './Section'
import Route from '@components/Route'
import { useState } from 'react'

interface RouteEntry {
  description: string
  href?: string
}

const Routes = (): JSX.Element => {
  const [routeDescription, setRouteDescription] = useState(
    'Travel somewhere...'
  )
  const routes: Record<string, RouteEntry> = {
    about: { description: 'Get to know me' },
    projects: {
      description: 'A showcase of some of my best programming projects',
    },
    photography: {
      description: 'My photography work',
    },
    blog: {
      description: 'Articles I write from time to time',
    },
    skills: {
      description:
        'My skills in the world of programming, photography, and design',
    },
  }

  return (
    <>
      <style jsx global>
        {`
          .indexRoutesContainer {
            display: flex;
            align-items: center;
            flex-direction: column;
          }

          .indexRoutes {
            margin-top: 100px;
            display: flex;
          }

          .indexRoute {
            white-space: nowrap;
            text-align: left;
            width: 60px;
            transform: rotate(-30deg);
            text-orientation: sideways-right;
          }

          .indexRouteIcon {
            width: 19px;
            height: auto;
            margin-right: 5px;
          }

          .indexRoute > div > a {
            font-size: 1.4rem;
            width: 60px;
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
              <div
                className="indexRoute"
                key={nanoid()}
                onMouseEnter={() => setRouteDescription(routes[r].description)}
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
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
                <Route href={routes[r].href ? routes[r].href ?? '' : '/' + r}>
                  {r}
                </Route>
              </div>
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

export default Routes
