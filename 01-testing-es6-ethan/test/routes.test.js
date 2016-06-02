import { expect } from 'chai'
import request from 'supertest'

import app from '../src/app'

describe('getRoot', () => {
  it('should respond with text', (done) => {
    request(app)
    .get('/')
    .expect(response => {
      expect(response.text).to.eql('Leave me alone.')
    })
    .end(done)
  })
})

describe('getHello', () => {
  it('should respond with text', (done) => {
    request(app)
    .get('/hello')
    .expect(response => {
      expect(response.text).to.include('talk')
    })
    .end(done)
  })
})

describe('getGoodbye', () => {
  it('should respond with text', (done) => {
    request(app)
    .get('/goodbye')
    .expect(200)
    .end(done)
  })
})

describe('getQuery', () => {
  it('should respond with text', (done) => {
    request(app)
    .get('/query?name=mark')
    .expect(response => {
      expect(response.text).to.include('Bob')
    })
    .end(done)
  })
})
