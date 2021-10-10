import Button from '@components/Button'
import { BlogPost } from '@data/blog'
import dayjs from 'dayjs'

const Article = ({ post }: { post: BlogPost }): JSX.Element => (
  <>
    <style jsx>{`
      h3 {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-style: normal;
      }

      .article {
        padding-top: 50px;
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
        margin-left: 10px;
        margin-right: 13px;
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
    `}</style>
    <div className="article">
      <h3>{post.title}</h3>
      <div className="meta">
        <p>
          Developed {dayjs(post.created, 'YYYY-MM-DD').fromNow()}
          <p className="meta-separator">λ</p>
          {post.readingTime} read
        </p>
      </div>
      <p className="description">{post.description}</p>
      <div className="bottom">
        <Button href={`/blog/${post.slug}`}>Read</Button>
      </div>
    </div>
  </>
)

export default Article
