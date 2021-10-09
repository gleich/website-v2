import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import Center from '@components/Center'
import Meta from '@components/Meta'
import Glow from '@components/Glow'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import relativeTime from 'dayjs/plugin/relativeTime'
import Button from '@components/Button'

const Blog: NextPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <style jsx>
        {`
          main {
            padding-top: 10vh;
            min-width: 40vw;
            margin: 0 20px;
          }

          h3 {
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
            font-style: normal;
          }

          .heading {
            padding-bottom: 50px;
          }

          .meta {
            display: flex;
            flex-direction: row;
          }

          .meta > p {
            color: grey;
            padding-bottom: 12px;
          }

          .meta > p,
          .meta-separator {
            font-size: 1.2rem;
          }

          .meta-separator {
            display: inline-block;
            color: white;
            margin: 0 10px;
            font-family: 'Victor Mono';
          }

          .description {
            max-width: 800px;
          }

          .bottom {
            padding-top: 20px;
            padding-left: 80%;
          }

          @media screen and (max-width: 600px) {
            .bottom {
              padding-left: 0;
            }
          }
        `}
      </style>
      <Meta title="Matt's blog" description="Matt Gleich's writings" />
      <Center>
        <main>
          <div className="heading">
            <Glow>
              <h1>Blog</h1>
            </Glow>
            <p>A collection of some of my writing</p>
          </div>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {posts.map((a: { [key: string]: any }) => (
            <div className="article" key={a.name}>
              <h3>{a.name}</h3>
              <div className="meta">
                <p>
                  Updated {a.timeSince} <p className="meta-separator">⎇</p>{' '}
                  {a.readingTime} read
                </p>
              </div>
              <p className="description">{a.description}</p>
              <div className="bottom">
                <Button href={`/blog/${a.slug}`}>Read</Button>
              </div>
            </div>
          ))}
        </main>
      </Center>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  dayjs.extend(customParseFormat)
  dayjs.extend(relativeTime)

  const postsFolder = 'posts'
  // Get files from the post dir
  const files = fs.readdirSync(path.join(postsFolder))

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join(postsFolder, filename),
      'utf-8'
    )
    const frontMatter = matter(markdownWithMeta)

    const slug = path.parse(filename).name.replaceAll(' ', '-').toLowerCase()
    let readingMinutes = Math.round(readingTime(frontMatter.content).minutes)
    if (readingMinutes === 0) {
      readingMinutes = 1
    }

    return {
      slug,
      name: frontMatter.data.name,
      description: frontMatter.data.description,
      readingTime:
        readingMinutes === 1 ? '1 minute' : `${readingMinutes} minutes`,
      timeSince: dayjs(frontMatter.data.date, 'YYYY-MM-DD').fromNow(),
      content: frontMatter.content,
    }
  })
  return {
    props: {
      posts: posts,
    },
  }
}

export default Blog
