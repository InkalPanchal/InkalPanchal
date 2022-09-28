const domain = require('node:domain');
const EventEmitter = require('node:events');

const eventEmitter = new EventEmitter();

var domain1 = domain.create();
domain1.on('error', (err)=>{console.log('domain1 handled this error', '('+err.message+')')});

domain1.add(eventEmitter); //add listener
eventEmitter.on('error', (err)=>{console.log('Listener handled this error', '('+err.message+')');})

eventEmitter.emit('error', new Error('To be handled by Listener'))
eventEmitter.removeAllListeners('error')
eventEmitter.emit('error', new Error('To be handled by domain'))
console.log("hello");

var domain2 = domain.create();

domain2.on('error', (err)=>{console.log(`domain2 handled this error (${err.message})`);});

domain2.run(()=>{
    var emitter2 = new EventEmitter();
    emitter2.emit('error', new Error("to be handled by domain2"));
})

domain1.members.map((val)=>{console.log(val);});
domain1.remove(eventEmitter); 

// eventEmitter.emit('error', new Error('Converted to exception. System will crash!'));
console.log("hello");