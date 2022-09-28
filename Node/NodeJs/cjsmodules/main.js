console.log('main starting');
const b = require('./b');
const a = require('./a');
console.log('in main a.done = %j , b.done = %j', a.done, b.done);