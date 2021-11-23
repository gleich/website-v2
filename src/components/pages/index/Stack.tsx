import { nanoid } from 'nanoid'
import Section from './Section'

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
        'JavaScript, and its superset called TypeScript, are JIT programming languages for modern UI applications.',
      bullets: [
        'Single-Page Websites',
        'Application Extensions',
        'APIs (REST)',
        'Command Line Tools',
      ],
    },
    {
      name: 'Rust',
      iconFileNames: ['rust'],
      description:
        'Low-level and fast systems programming language for the modern software developer.',
      bullets: [
        'Microservices',
        'General Automation',
        'Hardware',
        'Command Line Tools',
      ],
    },
    {
      name: 'Python',
      iconFileNames: ['python'],
      description:
        'High-level, JIT language for quick scripts with english-like syntax.',
      bullets: [
        'Automation Scripts',
        'Build Scripts',
        'Data Analysis',
        'Computer Vision',
      ],
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
            gap: 20px;
            flex-wrap: wrap;
            justify-content: center;
          }

          .technology {
            width: 390px;
          }

          .title {
            display: flex;
            align-items: center;
          }

          .icon {
            height: 25px;
            width: auto;
            padding-left: 20px;
            filter: invert(100%) sepia(5%) saturate(7207%) hue-rotate(252deg)
              brightness(116%) contrast(99%);
          }

          @media (prefers-color-scheme: light) {
            .icon {
              filter: invert(0%) sepia(61%) saturate(1476%) hue-rotate(342deg)
                brightness(107%) contrast(88%);
            }
          }
        `}
      </style>
      <Section name="main stack">
        <div className="container">
          {tech.map((t) => (
            <div className="technology" key={nanoid()}>
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
