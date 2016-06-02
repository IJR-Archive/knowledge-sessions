import Express from 'express'

import * as routes from './routes'

const app = Express()

app.get('/', routes.getRoot)
app.get('/hello', routes.getHello)
app.get('/goodbye', routes.getGoodbye)
app.get('/query', routes.getQuery)

if (process.env.NODE_ENV !== 'test') {
  app.listen(3000, () => console.log('Server up on http://localhost3000!'))
}

export default app
