const http = require('http');
const { AsyncLocalStorage } = require('node:async_hooks')

const asyncLocalStorage = new AsyncLocalStorage();

function logWithId(msg){
    const id = asyncLocalStorage.getStore();
    console.log(`${id !== undefined ? id : '-'}:`, msg);
}

// logWithId("hello")
let idSeq = 0;

http.createServer((req,res)=>{
    asyncLocalStorage.run(idSeq++, ()=>{
        logWithId('start');
        // res.write('start')
        setImmediate(()=>{
            logWithId('End')
            // res.write('end')
            res.end();
        })
    })  
}).listen(8080);

// http.get('http://localhost:8080');
// http.get('http://localhost:8080');
// http.get('http://localhost:8080');
// http.get('http://localhost:8080');
// http.get('http://localhost:8080');
// http.get('http://localhost:8080');