import { nanoid } from 'nanoid'
import Section from './Section'
import Link from 'next/link'
import { useState } from 'react'

interface Route {
  name: string
  paddingLeft: number
  description: string
}

const Links = (): JSX.Element => {
  const [routeDescription, setRouteDescription] = useState<string>()
  const routes: Route[] = [
    {
      name: 'about',
      paddingLeft: 0,
      description: 'About me',
    },
    {
      name: 'projects',
      paddingLeft: 0,
      description: 'My projects',
    },
    {
      name: 'photography',
      paddingLeft: 15,
      description: 'My photography work',
    },
  ]
  return (
    <>
      <style jsx>
        {`
          .routes {
            display: flex;
            align-items: flex-end;
            gap: 25px;
            margin-left: 30px;
            text-align: start;
          }

          .route {
            text-orientation: sideways-right;
            writing-mode: vertical-rl;
            transform: rotate(-130deg);
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
          {routes.map((r: Route) => (
            <div
              key={nanoid()}
              style={{
                paddingLeft: r.paddingLeft + 'px',
              }}
            >
              <p
                className="route"
                key={nanoid()}
                onMouseEnter={() => setRouteDescription(r.description)}
                onMouseLeave={() => setRouteDescription(undefined)}
              >
                <Link href={'/' + r}>{'-> ' + r.name}</Link>
              </p>
            </div>
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
