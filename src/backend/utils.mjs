function omitBy(obj, ...props) {
  const result = { ...obj };
  props.forEach(function (prop) {
    delete result[prop];
  });
  return result;
}

//返回标题 0 返回标题 1 返回章节
function getTitle(v, type = 0) {
  let title = v
  const items = (v || '').split('|')

  if (items.length > type) {
    title = items[type].trim()
  }

  return title
}