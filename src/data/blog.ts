import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import relativeTime from 'dayjs/plugin/relativeTime'
import readingTime from 'reading-time'

export interface BlogPost {
  slug: string
  title: string
  description: string
  readingTime: string
  timeSince: string
  content: string
}

const getBlogPosts = (): BlogPost[] => {
  dayjs.extend(customParseFormat)
  dayjs.extend(relativeTime)

  const postsFolder = 'posts'
  const files = fs.readdirSync(path.join(postsFolder))

  return files.map((filename) => {
    const rawContent = fs.readFileSync(
      path.join(postsFolder, filename),
      'utf-8'
    )
    const frontMatter = matter(rawContent)

    let readingMinutes = Math.round(readingTime(frontMatter.content).minutes)
    if (readingMinutes === 0) {
      readingMinutes = 1
    }

    return {
      slug: path.parse(filename).name.replaceAll(' ', '-').toLowerCase(),
      title: String(frontMatter.data.name),
      description: String(frontMatter.data.description),
      readingTime: readingMinutes === 1 ? '1 minute' : `${readingTime} minutes`,
      timeSince: dayjs(frontMatter.data.date, 'YYYY-MM-DD').fromNow(),
      content: frontMatter.content,
    }
  })
}

export default getBlogPosts
