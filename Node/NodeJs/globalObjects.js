function printHello() {
    console.log( "Hello, World!");
 }
 
 // Now call above function after 2 seconds
 var t = setTimeout(printHello, 2000);
 
 // Now clear the timer
// clearTimeout(t);

console.info('Hello')
console.time('Getting data');
console.timeEnd('Getting data')
var first = [{a:1,b:2},{a:2, b:3}]
console.log('first', JSON.stringify(first, null, 2))
console.table([first])

console.trace(first)
console.assert(1>2, 'error');

console.warn('warning');
