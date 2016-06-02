export const changeQueryKeys = (query, object) => (
  new Promise(resolve => {
    Object.keys(object).forEach(key => query[key] = object[key])
    resolve(query)
  })
)
