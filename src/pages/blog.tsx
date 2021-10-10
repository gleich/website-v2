import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Center from '@components/Center'
import Meta from '@components/Meta'
import Glow from '@components/Glow'
import { getBlogPosts, BlogPost } from '@data/blog'
import Article from '@components/pages/blog/Article'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import relativeTime from 'dayjs/plugin/relativeTime'

const Blog: NextPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  dayjs.extend(customParseFormat)
  dayjs.extend(relativeTime)
  return (
    <>
      <style jsx>
        {`
          main {
            padding-top: 10vh;
            min-width: 40vw;
            margin: 0 20px;
            max-width: 750px;
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
          {posts.map((a: BlogPost) => (
            <Article key={a.slug} post={a} />
          ))}
        </main>
      </Center>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      posts: getBlogPosts(),
    },
  }
}

export default Blog
