import { nanoid } from 'nanoid'
import Section from './Section'
import Image from 'next/image'

interface Technology {
  name: string
  iconFileNames: string[]
  description: string
  bullets: string[]
}

const Stack = (): JSX.Element => {
  const tech: Technology[] = [
    {
      name: 'golang',
      iconFileNames: ['go'],
      description:
        'A general purpose, blazing fast, and minimal programming language by Google.',
      bullets: [
        'Command Line Tools',
        'APIs (REST & GraphQL)',
        'Microservices',
        'General Automation',
        'Hardware',
      ],
    },

    {
      name: 'JS/TS',
      iconFileNames: ['javascript', 'typescript'],
      description:
        'General purpose programming language; Powers the web and our world',
      bullets: ['Websites'],
    },
  ]
  return (
    <>
      <style jsx>
        {`
          p {
            max-width: 400px;
            padding: 20px 0;
          }

          ul {
            padding-left: 30px;
          }

          .container {
            display: flex;
            align-items: center;
            flex-direction: column;
          }

          .title {
            display: flex;
            align-items: center;
          }

          .icon {
            height: 25px;
            max-height: 30px;
            width: auto;
            padding-left: 20px;
          }

          path {
            fill: var(--darkmode-background);
          }
        `}
      </style>
      <Section name="stack">
        <div className="container">
          {tech.map((t) => (
            <div key={nanoid()}>
              <div className="title">
                <h4>{t.name}</h4>
                {t.iconFileNames.map((n) => (
                  <img
                    key={nanoid()}
                    className="icon"
                    src={`/images/logos/${n}.svg`}
                  />
                ))}
              </div>
              <p>{t.description}</p>
              <ul className="bullets">
                {t.bullets.map((b) => (
                  <li key={nanoid()}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}

export default Stack
