
module.exports = function await(event) {
  var self = this
  return function (done) {
    if (event !== 'error') done = done.bind(null, null)
    self.once(event, done)
  }
}
