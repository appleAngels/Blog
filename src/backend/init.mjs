import * as fsP from 'fs/promises'
import * as path from 'path'
import readingTime from 'reading-time'
import { bundleMDX } from 'mdx-bundler'
import moment from 'moment'

//获取 MDX 文档数据
const DOCROOT = process.env.DOC_ROOT || path.join(process.cwd(), 'docs')
const COMPONENTROOT = process.env.COMP_ROOT || path.join(process.cwd(), 'components')

async function getMDXList() {
  const files = await getPathAll(DOCROOT)

  let posts = []
  let onces = []

  for (let i = 0; i < files.length; i++) {
    const fp = path.join(files[i].dir, files[i].name)

    //文章表弟列表
    let headings = []
    const { code, frontmatter } = await bundleMDX({
      mdxOptions: opts => {
        //TODO: 添加额外的处理插件
        return opts
      },
      file: fp,
      cwd: COMPONENTROOT
    })

    //是否为草稿
    if (frontmatter.isDraft) {
      continue
    }

    //统计字数
    const text = await fsP.readFile(fp)
    const stats = readingTime(text, { wordsPerMinute: 400 })

    const category = frontmatter.category || '博客'

    let post = {
      sort: getSort(files[i].name),
      category: category,
      categorySlug: toPinyin(category),
      chapter: '',
      featureImage: '',
      featureVideo: '',
      demoLink: '',
      sourceLink: '',
      scripts: '',
      i18n: '',
      ...frontmatter,
      readMins: stats.minutes,
      words: stats.words,
      content: code,
      headings: JSON.stringify(headings),
      filename: fp,
      createdAt: moment(frontmatter.createdAt),
      updatedAt: moment(frontmatter.updatedAt)
    }

    //校验
    const key = `${post.slug}_${post.i18n}`
    if (!onces[key]) {
      onces[key] = true
    } else {
      console.error(key, 'URL 重复!')
    }

    posts.push(post)
  }

  return posts
}

// 获取文件排序
function getSort(filename) {
  const items = filename.split(' ')
  if (items.length > 0) {
    return ~~items[0]
  }

  return -1
}

// 获取文件路径
async function getPathAll(root, excludes = {}, attachs = {}, allFiles = []) {
  //获取所有文件
  const files = (await fsP.readdir(root, { withFileTypes: true })).filter(f => !excludes[f.name])

  //存储文件
  const dir = []
  for (let i = 0; i < files.length; i++) {
    const ext = path.extname(files[i].name)

    if (files[i].isDirectory()) {
      dir.push(path.join(root, files[i].name))
    } else if (files[i].isFile() && (ext === '.md' || ext === '.mdx')) {
      allFiles.push({ ...attachs, dir: root, name: files[i].name })
    }
  }

  //递归
  await Promise.all(dir.map(async f => getPathAll(f, excludes, attachs, allFiles)))

  return allFiles
}

//移除首位字符
function removeFBChar(str, ch) {
  if (typeof str !== 'string' || str.length < 1) {
    return ''
  }

  //排除首字符
  if (str.startsWith(ch)) {
    return removeFBChar(str.slice(1), ch)
  }

  //排除尾字符
  if (str.endsWith(ch)) {
    return removeFBChar(str.slice(0, str.length - 1), ch)
  }

  return str
}

//文字转拼音
function toPinyin(text) {
  const arr = TinyPinyin.parse(text.trim())
  const splits = []
  let tmp = ''

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].type === 2) {
      if (tmp.length > 0) {
        splits.push(tmp)
        tmp = ''
      }
      splits.push(arr[i].target)
    } else {
      if (arr[i].source === ' ') {
        tmp += '-'
      } else {
        tmp += arr[i].source
      }
    }
  }

  if (tmp.length > 0) {
    splits.push(tmp)
  }

  //返回的拼音字段
  let py = (splits.join('-') || '')
    .toLowerCase()
    .replace(/[^a-z0-9-]/gi, '')
    .replace(/-+/g, '-')

  //移除首位字符
  return removeFBChar(py, '-')
}

async function initPostsToDB() {
  const posts = await getMDXList()
  await savePosts(posts)
}
export { initPostsToDB }
