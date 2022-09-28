const queryString = require('node:querystring')

const query = queryString.parse('foo=bar&abc=xyz&abc=123');
console.log('query.abc %s',query.abc);

const stringyfy = queryString.stringify({foo : 'bar', abc : [123, 456], def: ''})
console.log('stringyfy %s',stringyfy);

const strings = queryString.stringify({ w: ' कख़ॻच', foo: 'bar' })
console.log('strings %s', strings);