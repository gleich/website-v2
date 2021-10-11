import Center from '@components/Center'
import { getBlogPost, getBlogPosts } from '@data/blog'
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next'
import ReactMarkdown from 'react-markdown'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import GradientUnderline from '@components/GradientUnderline'
import Meta from '@components/Meta'
import Copyright from '@components/Copyright'

const ArticlePage = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  dayjs.extend(customParseFormat)
  dayjs.extend(relativeTime)
  dayjs.extend(localizedFormat)
  const postedDate = dayjs(post.created, 'YYYY-MM-DD').format('ll')
  return (
    <>
      <style jsx global>
        {`
          main {
            max-width: 750px;
            padding: 0 20px;
            margin-bottom: 100px;
          }

          .top {
            padding-top: 9vh;
            padding-bottom: 8px;
          }

          .title {
            font-size: clamp(4rem, 10vw, 5.125rem);
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
            font-style: normal;
          }

          .meta {
            color: grey;
            font-family: 'Victor Mono';
            font-feature-settings: 'ss01';
            font-size: 1.4rem;
          }

          p {
            font-size: 1.5rem;
          }

          .separator-char {
            color: white;
            padding: 0px 10px;
          }

          .markdown > h1 {
            text-decoration: underline;
          }

          .markdown > ol,
          .markdown > ul,
          .markdown > h1,
          .markdown > h2,
          .markdown > h3,
          .markdown > h4,
          .markdown > pre {
            margin: 20px 0;
          }

          .markdown > h1,
          .markdown > h2 {
            text-decoration: none;
          }

          .markdown > ol > li > ol,
          .markdown > ol > li > ul,
          .markdown > ul > li > ol,
          .markdown > ul > li > ul {
            margin-left: 20px;
          }
          .markdown > h1 {
            font-size: clamp(3.375rem, 7vw, 3.25rem);
          }

          .markdown > h2 {
            font-size: clamp(2.4375rem, 5vw, 2.375rem);
          }

          .markdown > h3 {
            font-size: clamp(1.1rem, 3vw, 0.1875rem);
          }

          .markdown > pre > code,
          .markdown > p > code {
            font-size: 1.2rem;
            font-family: 'Victor Mono';
            font-feature-settings: 'ss01';
          }

          .markdown > pre {
            border: 1px solid grey;
            padding: 20px;
            overflow: scroll;
          }

          .markdown > p > code {
            border: 1px solid rgb(56, 56, 56);
            border-radius: 3px;
            padding: 2px 5px;
          }

          .markdown {
            padding-top: 40px;
          }

          @media (prefers-color-scheme: light) {
            .markdown > pre {
              box-shadow: 10px 10px;
            }

            .separator-char {
              color: black;
            }
          }
        `}
      </style>
      <Meta
        title={post.title}
        description={post.description}
        label1="Developed Date"
        data1={postedDate}
        label2="Read Time"
        data2={post.readingTime}
      />
      <Center>
        <main>
          <GradientUnderline>
            <div className="top">
              <h2 className="title">{post.title}</h2>
              <p>By Matt Gleich</p>
              <p className="meta">
                {postedDate} <span className="separator-char">λ</span>{' '}
                {post.readingTime} read
              </p>
            </div>
          </GradientUnderline>
          <ReactMarkdown className="markdown">{post.content}</ReactMarkdown>
        </main>
      </Center>
      <footer>
        <Copyright repoLink />
      </footer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: getBlogPosts().map((p) => ({
    params: {
      slug: p.slug,
    },
  })),
  fallback: false,
})

export const getStaticProps: GetStaticProps = (
  context: GetStaticPropsContext
) => ({
  props: {
    post: getBlogPost(context.params?.slug + '.md'),
  },
})

export default ArticlePage
