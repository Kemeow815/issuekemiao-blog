/* eslint-disable */
const { promises: fs } = require('fs')
const path = require('path')
const RSS = require('rss')
const matter = require('gray-matter')

async function generate() {
  const feed = new RSS({
    title: '克喵爱吃卤面',
    site_url: 'https://www.kemiaofx.cn',
    feed_url: 'https://www.kemiaofx.cn/feed.xml',
  })

  const posts = await fs.readdir(path.join(__dirname, '..', 'data', 'blog'))

  await Promise.all(
    posts.map(async name => {
      const content = await fs.readFile(path.join(__dirname, '..', 'data', 'blog', name))
      const frontmatter = matter(content)

      feed.item({
        title: frontmatter.data.title,
        url: 'https://giscafer.com/blog/' + name.replace(/\.mdx?/, ''),
        date: frontmatter.data.publishedAt,
        description: frontmatter.data.summary,
      })
    }),
  )

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
