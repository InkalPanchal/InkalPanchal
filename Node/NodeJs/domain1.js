// // Create a top-level domain for the server
const domain = require('node:domain');
const fs = require('fs')

const d = domain.create();
d.on('error', (er) => {
  console.error('Caught error!', er);
});
d.run(() => {
  process.nextTick(() => {
    setTimeout(() => { // Simulating some various async stuff
      fs.open('non-existent file', 'r', (er, fd) => {
        if (er) throw er;
        console.log(fd);
      });
    }, 100);
  });
});

setTimeout(()=>console.log("hello"),1000)
setTimeout(()=>console.log("hello there!"),1000)


const d1 = domain.create();
const d2 = domain.create();

let p;
let pr;
d1.run(() => {
  p = Promise.resolve(42);
  pr = Promise.reject('Promise rejected - error')
});

d2.run(() => {
//   p.then((v) => {
//     // running in d2
//     // console.log(v);
//   });
    p.then(p.domain.bind((v) => {
        // running in d1
        console.log(v);
    }));
    pr.catch(pr.domain.bind((e)=>{console.log(e);}))
});

setTimeout(()=>{console.log("Message after error handled");}, 2000)