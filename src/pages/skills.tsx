import Center from '@components/Center'
import Meta from '@components/Meta'
import Route from '@components/Route'
import technologies from '@data/technologies'
import { nanoid } from 'nanoid'
import { NextPage } from 'next'

const Skills: NextPage = (): JSX.Element => (
  <>
    <Meta
      title="Skills"
      description="My skills in programming, photography, and design"
    />
    <style jsx>
      {`
        main {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 30px;
          margin: 20px;
        }

        img {
          width: 80px;
          height: auto;
          filter: invert(100%) sepia(5%) saturate(7207%) hue-rotate(252deg)
            brightness(116%) contrast(99%);
        }

        h1 {
          padding-top: 10px;
          font-family: 'Newsreader';
        }

        .container {
          border: 1px solid var(--border);
          padding: 20px 30px;
        }

        .top {
          gap: 30px;
          border-bottom: 1px solid var(--border);
          padding-bottom: 15px;
          display: inline-flex;
        }

        .bottom {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .description {
          padding-top: 24px;
          max-width: 400px;
        }

        .projects {
          padding-top: 20px;
          display: flex;
          max-width: 300px;
          flex-wrap: wrap;
          align-items: center;
        }

        .project {
          border: 1px solid var(--border);
          padding: 5px;
          margin: 5px;
          height: 40px;
        }

        @media (prefers-color-scheme: light) {
          img {
            filter: invert(0%) sepia(61%) saturate(1476%) hue-rotate(342deg)
              brightness(107%) contrast(88%);
          }
        }
      `}
    </style>
    <Center root>
      <main>
        {technologies.map((t) => (
          <div className="container" key={nanoid()}>
            <div className="top">
              <h1>{t.name}</h1>
              {t.iconNames.map((i) => (
                <img
                  src={`/images/logos/${i}.svg`}
                  style={t.iconWidths ? { width: `${t.iconWidths}px` } : {}}
                  key={nanoid()}
                />
              ))}
            </div>
            <div className="bottom">
              <p className="description">
                {t.shortDescription + ' ' + t.longDescription}
              </p>
              <ul className="projects">
                {t.projects.map((p) => (
                  <div className="project" key={nanoid()}>
                    <Route href={p}>{p.split('/').slice(-2)[1]}</Route>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </main>
    </Center>
  </>
)

export default Skills
