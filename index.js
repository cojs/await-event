'use strict'

module.exports = function(event) {
  return new Promise((resolve, reject) => {
    const done = event === 'error' ? reject : resolve
    this.once(event, done)
  })
}
