'use strict'

module.exports = function(emitter, event, timeout) {
  if (typeof emitter === 'string') {
    timeout = event
    event = emitter
    emitter = this
  }

  return new Promise((resolve, reject) => {
    const done = event === 'error' ? reject : resolve
    if (timeout) {
      setTimeout(reject, timeout, new Error('timeout'))
    }
    emitter.once(event, done)
  })
}
