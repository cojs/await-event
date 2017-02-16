'use strict'

const EventEmitter = require('events')
const assert = require('assert')
const co = require('co')
const awaitEvent = require('..')

it('await event', () => {
  return co(function* () {
    const e = new EventEmitter()
    e.await = awaitEvent
    setTimeout(() => e.emit('data', 'foo'), 1000)
    assert.equal(yield e.await('data'), 'foo')
  })
})

it('await error', done => {
  co(function* () {
    const e = new EventEmitter()
    e.await = awaitEvent
    setTimeout(() => e.emit('error', new Error('error')), 1000)

    yield e.await('error')
  }).catch(err => {
    assert.equal(err.message, 'error')
    done()
  })
})
