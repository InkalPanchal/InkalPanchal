const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const config = require('../global.config')
const fs = require('node:fs')

//create middleware for verifying token
router.use((req,res,next)=>{
    let token;
    fs.readFile('./Authentication/token.txt', 'utf-8', (err, data)=>{
        if(err) throw err;
        req.headers['token'] = data;
        token = req.headers['token'];
        console.log(req.headers['token']);
    
    // req.headers['token'] = localStorage.getItem('token');
    // console.log(localStorage.getItem('token'));
    // console.log('token',req.headers['token']);

    if(req.headers['token'] !== undefined){
        jwt.verify(req.headers['token'], config.secretKey, {
            algorithms:config.algorithm
        }, (err, decoded)=>{
            if(err){
                let errorData = {
                    message: err.message,
                    expiredAt: err.expiredAt
                }
                console.log("errordata", errorData);
                res.status(401).json({
                    message:'Unauthorized access.'
                });
            }
            if(decoded){
                req.decoded = decoded
                // req.headers['data'] = decoded;
                // console.log(req.decoded);
                console.log('decoded',decoded);
                next();
            }
        });
    }
    else {
        res.status(403).json({message:'Forbidden Access.'})
    }
})
})

module.exports = router;