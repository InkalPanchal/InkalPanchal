require('dotenv').config();
const express = require('express');
var path = require('path');
const router = express.Router();
const index = express();
const user = require('./Routes/user')

index.set('views', path.join(__dirname, 'views'));
index.set('view engine', 'jade');

index.use('/user', user)
index.use('/admin', user, (req,res)=>{
    res.sendStatus(401);
});

index.listen(process.env.PORT, ()=>{
    console.log('Server is listening on port '+ process.env.PORT);
})