//example for Application level middleware
require('dotenv').config();
const express = require('express');
const app = express();

app.use((req,res,next)=>{
    console.log('Time:',Date.now());
    next();
})

//middleware
app.use('/user/:id(\\d+)', (req,res,next)=>{
    console.log(`Request URL: ${req.originalUrl}`);
    next();
}, (req,res,next)=>{
    console.log(`Request Type: ${req.method}`);
    next();
})

app.get('/', (req,res,next)=>{
    res.send('Time: '+ Date.now());
})

app.get('/user/:id(\\d+)', (req,res,next)=>{
    console.log('ID:', req.params.id);
    //to skip the middleware
    if(req.params.id === '0') next('route'); // will call other method with same route
    else next(); //will call middleware
}, (req,res,next)=>{
    res.send('Regular User Info');
})

//never called this method as already ended above.
//but if id=0, in above method not pass middleware then calling this method.
app.get('/user/:id(\\d+)', (req,res,next)=>{
    res.send('special User Info')
})


function logUrl(req,res,next) {
    console.log('Request URL:',req.originalUrl);
    next();
}

function logMethod(req,res,next){
    console.log('Request method:',req.method);
    next();
}

const logInfo = [logUrl, logMethod];
app.get('/user/check', logInfo, (req,res,next)=>{
    res.status(200).send(req.originalUrl);
})

app.use((err,req,res,next)=>{
    console.error(er.stack);
    res.status(500).send('Something broke!');
})

app.listen(process.env.PORT, ()=>{
    console.log(`listening on port ${process.env.PORT}`);
});