const process = require('node:process');

process.on('beforeExit', (code) => {
  console.log('Process beforeExit event with code: ', code);
});

// process.on('exit', (code) => {
//   console.log('Process exit event with code: ', code);
// });


process.on('exit', (code) => {
    setTimeout(() => {
      console.log('This will not run');
    }, 0);
  });

console.log('This message is displayed first.')

// Printing to console
process.stdout.write("Hello World!" + "\n");

// Reading passed parameter
process.argv.forEach(function(val, index, array) {
   console.log(index + ': ' + val);
});

// Getting executable path
console.log('Getting executable path: '+process.execPath);
console.log(process.versions);
console.log("process.argv0: "+process.argv0);
// Platform Information 
console.log('Platform Information: '+ process.platform);



// Begin reading from stdin so the process does not exit.
process.stdin.resume();
console.log('press ctrl-c');
process.on('SIGINT', () => {
  console.log('Received SIGINT.');
});

// Using a single function to handle multiple signals
function handle(signal) {
  console.log(`Received ${signal}`);
}

process.on('SIGINT', handle);
process.on('SIGTERM', handle)