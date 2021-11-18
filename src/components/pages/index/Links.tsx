import { nanoid } from 'nanoid'
import Section from './Section'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

interface Route {
  name: string
  description: string
}

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
      <style jsx>
        {`
          .routes {
            margin-top: 100px;
            margin-left: 30px;
            display: flex;
            height: min-content;
          }

          .route {
            position: sticky;
            width: 20px;
            white-space: nowrap;
            display: inline;
            text-align: left;
            width: 50px;
            transform: rotate(-30deg);
            top: 0px;
            bottom: 0px;
          }

          .routeDescription {
            margin-top: 20px;
          }

          @media not all and (min-resolution: 0.001dpcm) {
            .routes {
              gap: 35px;
            }
          }
        `}
      </style>
      <Section name="routes">
        <div className="routes">
          {Object.keys(routes)
            .sort()
            .map((r: string) => (
              <p
                className="route"
                key={nanoid()}
                onMouseEnter={() => setRouteDescription(routes[r])}
                onMouseLeave={() => setRouteDescription('Travel somewhere...')}
              >
                <motion.div>
                  <Link href={'/' + r}>{'-> ' + r}</Link>
                </motion.div>
              </p>
            ))}
        </div>
        <p className="routeDescription">
          {routeDescription ? routeDescription : <>&nbsp;</>}
        </p>
      </Section>
    </>
  )
}

export default Links
