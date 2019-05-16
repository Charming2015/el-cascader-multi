export function _uniq (arr) {
  let result = []
  arr.forEach(item => {
    if (!result.includes(item)) {
      result.push(item)
    }
  })
  return result
}

export function _findByObj (arr, obj) {
  let keys = Object.keys(obj)
  return arr.find(item => keys.every(key => JSON.stringify(item[key]) === JSON.stringify(obj[key])))
}