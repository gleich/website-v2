import { nanoid } from 'nanoid'
import Section from './Section'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Links = (): JSX.Element => {
  const [routeDescription, setRouteDescription] = useState<string>(
    'Travel somewhere...'
  )
  const routes: Record<string, string> = {
    about: 'About me',
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
            gap: 0px;
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

          .indexRoute > a {
            font-size: 1.4rem;
          }

          .indexRouteDescription {
            margin-top: 50px;
          }
        `}
      </style>
      <Section name="routes" style={{ alignItems: 'center' }}>
        <div className="indexRoutesContainer">
          <div className="indexRoutes">
            {Object.keys(routes).map((r: string) => (
              <p
                className="indexRoute"
                key={nanoid()}
                onMouseEnter={() => setRouteDescription(routes[r])}
                onMouseLeave={() => setRouteDescription('Travel somewhere...')}
              >
                <Link href={'/' + r}>{'-> ' + r}</Link>
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
