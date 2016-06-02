import { expect } from 'chai'

import { changeQueryKeys } from '../src/change-query-keys'

describe('changeQueryKeys', () => {
  it('should change the key of an object', done => {
    const query = {a: 1, b: 2, name: 'Jim'}
    const name = 'Larry'
    changeQueryKeys(query, {name})
    .then(query => {
      expect(query.name).to.eql('Larry')
      done()
    })
  })
})
