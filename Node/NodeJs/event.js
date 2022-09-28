const event = require('events');

let eventEmitter = new event.EventEmitter();
let m = 0;
eventEmitter.on('eventName', function (a,b){
    console.log("event emitted");
    console.log(a , b, this, this === eventEmitter);
    console.log(++m);
})
// eventEmitter.once('eventName', function(a,b){
//     console.log("event emitted");
//     console.log(a , b, this, this === eventEmitter);
//     console.log(++m);
// })
eventEmitter.on('event', function listner1(){
    console.log("Listner 1");
})
eventEmitter.on('event', function listner2(arg1, arg2){
    console.log(`${arg1} ${arg2} listner2`);
})
eventEmitter.on('event', function listner3(...arg){
    console.log(`${arg.join(', ')} listner3`);
})
eventEmitter.addListener('event', function listner4(...arg){
    console.log("add another listner");
});
eventEmitter.on('error', (err)=>{
    console.error("Whoops! error occured");
})
var connectionHandler = function connected()
{
    console.log("connected");

    eventEmitter.emit('eventName', 'a','b')

    eventEmitter.emit('eventName', 'c','d')
    eventEmitter.emit('error', new Error("Whoops!"))

    eventEmitter.emit('event', 1,2,3,4,5,6)

    console.log(eventEmitter.eventNames());
    console.log(eventEmitter.getMaxListeners());
    console.log(eventEmitter.listeners('event'));
   
}


eventEmitter.on('connection', connectionHandler);

eventEmitter.emit('connection')

