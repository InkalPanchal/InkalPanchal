const {AsyncLocalStorage} = require('async_hooks')
const asyncLocalStorage = new AsyncLocalStorage();
const store = {id:1}

asyncLocalStorage.enterWith(store);
asyncLocalStorage.getStore();
someAsyncOperation(()=>{
    asyncLocalStorage.getStore();
})


