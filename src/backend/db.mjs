async function savePosts(posts) {
  const db = getDB()
  if (!db) {
    console.error('获取数据库实例失败！')
    return
  }

  //排序，确保日期越小对应的 ID 越小
  const initPosts = posts
    .sort((a, b) => {
      if (a.sort === b.sort) {
        if (a.createdAt.isSame(b.createdAt)) return 0
        else return a.createdAt.isBefore(b.createdAt) ? -1 : 1
      }

      return a.sort - b.sort
    })
    .map(v => {
      return {
        ...omitBy(v, 'sort'),
        createdAt: v.createdAt.format('YYYY-MM-DD HH:mm:ss'),
        updatedAt: v.createdAt.format('YYYY-MM-DD HH:mm:ss')
      }
    })

  await db.posts.deleteMany({})
  for (const v of initPosts) {
    await db.posts.create({ data: v })
  }

  // await db.posts.createMany({
  //     data: posts,
  //     skipDuplicates: true
  // })
}

async function getPostPaths() {
  const db = getDB()
  if (!db) {
      console.error('获取数据库实例失败！')
      return []
  }

  const paths = await db.posts.findMany({
      select: {
          slug: true
      }
  })

  return paths.map(v => v.slug || '')
}

//通过 slug 获取文章信息
async function getPostBySlug(slug) {
  const db = getDB()
  if (!db) {
      console.error('获取数据库实例失败！')
      return null
  }

  const post = await db.posts.findFirst({
      where: {
          slug: {
              equals: slug
          }
      },

      select: {
          title: true, 
          description: true, 
          content: true,
          slug: true, 
          category: true, 
          categorySlug: true, 
          words: true,
          author: true,
          readMins: true, 
          tags: true, 
          featureImage: true, 
          featureImageWidth: true, 
          featureImageHeight: true, 
          featureVideo: true,
          demoLink: true,
          sourceLink: true,
          createdAt: true, 
          updatedAt: true,
      }
  })

  return post ? {
      ...post,
      title: getTitle(post.title)
  } : null
}

export { savePosts, getPostPaths, getPostBySlug }
