# Await Event

A really stupid utility I use frequently for event emitters.
Allows you to `yield` an event and return the results.
I use this a lot of locking.

Note: you probably shouldn't use this for the `error` event.

## Example

```js
var PassThrough = require('stream').PassThrough

var stream = new PassThrough()
// you attach it directly on an event emitter
stream.await = require('await-event')

co(function* () {
  var chunk = yield stream.await('data')
  var chunk = yield stream.await('data')
  var chunk = yield stream.await('data')
})()

stream.write('some chunk')
```
