import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

export interface BlogPost {
  slug: string
  title: string
  description: string
  readingTime: string
  created: string
  content: string
  filename: string
}

export const postsFolder = 'posts'

export const getBlogPosts = (): BlogPost[] => {
  const files = fs.readdirSync(path.join(postsFolder))
  return files.map((filename) => getBlogPost(filename))
}

export const getBlogPost = (filename: string): BlogPost => {
  const rawContent = fs.readFileSync(path.join(postsFolder, filename), 'utf-8')
  const frontMatter = matter(rawContent)

  let readingMinutes = Math.round(readingTime(frontMatter.content).minutes)
  if (readingMinutes === 0) {
    readingMinutes = 1
  }

  return {
    slug: path.parse(filename).name,
    title: String(frontMatter.data.name),
    description: String(frontMatter.data.description),
    readingTime: readingMinutes === 1 ? '1 minute' : `${readingMinutes} minute`,
    created: frontMatter.data.date,
    content: frontMatter.content,
    filename,
  }
}
