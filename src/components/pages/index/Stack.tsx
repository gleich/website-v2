import Route from '@components/Route'
import technologies from '@data/technologies'
import { nanoid } from 'nanoid'
import Section from './Section'

const Stack = (): JSX.Element => (
  <>
    <style jsx>
      {`
        ul {
          padding-left: 30px;
        }

        .rootContainer {
          display: flex;
          flex-direction: column;
        }

        .container {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: center;
          margin: 25px 0;
        }

        .mainDescription {
          padding-bottom: 20px;
        }

        .description {
          padding: 20px 0;
        }

        .technology {
          width: 350px;
          border: 1px solid var(--border);
          padding: 15px;
        }

        .title {
          display: flex;
          align-items: center;
        }

        .seeMore {
          align-self: center;
        }

        .icon {
          height: 25px;
          width: auto;
          padding-left: 20px;
          filter: invert(100%) sepia(5%) saturate(7207%) hue-rotate(252deg)
            brightness(116%) contrast(99%);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
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
      <div className="rootContainer">
        <p className="mainDescription">
          Some of my most used programming languages and what I use them for:
        </p>
        <div className="container">
          {technologies.map((t) => (
            <div className="technology" key={nanoid()}>
              <div className="title">
                <h4>{t.name}</h4>
                {t.iconNames.map((n) => (
                  <img
                    key={nanoid()}
                    className="icon"
                    src={`/images/logos/${n}.svg`}
                    alt={n}
                  />
                ))}
              </div>
              <p className="description">{t.shortDescription}</p>
              <ul className="bullets">
                {t.uses.map((b) => (
                  <li key={nanoid()}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="seeMore">
          See more on my <Route href="/skills">skills page</Route>.
        </p>
      </div>
    </Section>
  </>
)

export default Stack
