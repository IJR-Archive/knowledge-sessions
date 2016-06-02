import { changeQueryKeys } from './change-query-keys'

export const getRoot = (request, response) => response.send('Leave me alone.')

export const getHello = (request, response) => {
  return response.send("Don't talk to me.")
}

export function getGoodbye (request, response) {
  return response.send('Finally.')
}

export const getQuery = (request, response) => {
  const { query } = request

  const name = 'Bob'
  const job = 'Unemployed'
  const isCool = false

  changeQueryKeys(query, {name})
  .then(query => changeQueryKeys(query, {job, isCool}))
  .then(query => response.send(query))
}
