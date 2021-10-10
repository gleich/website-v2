import Center from '@components/Center'
import { getBlogPost, getBlogPosts } from '@data/blog'
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next'
import ReactMarkdown from 'react-markdown/react-markdown.min'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import GradientUnderline from '@components/GradientUnderline'
import Meta from '@components/Meta'

const ArticlePage = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  dayjs.extend(customParseFormat)
  dayjs.extend(relativeTime)
  dayjs.extend(localizedFormat)
  return (
    <>
      <style jsx global>
        {`
          main {
            max-width: 700px;
            margin: 0 20px;
          }

          .top {
            padding-top: 9vh;
            padding-bottom: 8px;
          }

          .meta {
            color: grey;
            font-family: 'Victor Mono';
            font-feature-settings: 'ss01';
          }

          .separator-char {
            color: white;
            padding: 0px 10px;
          }

          .markdown > h1 {
            text-decoration: underline;
          }

          .markdown > ol,
          .markdown > ul {
            padding: 20px 0;
          }

          .markdown > h1,
          .markdown > h2 {
            text-decoration: none;
          }

          .markdown > h1 {
            font-size: clamp(3.25rem, 10vw, 5.125rem);
          }

          .markdown > h2 {
            font-size: clamp(2.375rem, 7vw, 3.25rem);
          }

          .markdown > h3 {
            font-size: clamp(1.4375rem, 5vw, 2.375rem);
          }

          .markdown > h4 {
            font-size: clamp(1.1rem, 3vw, 0.1875rem);
          }

          .markdown > pre > code {
            font-size: 1.2rem;
            font-family: 'Victor Mono';
            font-feature-settings: 'ss01';
          }

          .markdown {
            padding-top: 100px;
          }
        `}
      </style>
      <Meta title={post.title} description={post.description} />
      <Center>
        <main>
          <GradientUnderline>
            <div className="top">
              <h2>{post.title}</h2>
              <p className="meta">
                {dayjs(post.created, 'YYYY-MM-DD').format('ll')}{' '}
                <span className="separator-char">λ</span> {post.readingTime}{' '}
                read
              </p>
            </div>
          </GradientUnderline>
          <ReactMarkdown className="markdown">{post.content}</ReactMarkdown>
        </main>
      </Center>
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
