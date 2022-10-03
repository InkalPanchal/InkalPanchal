const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../global.config')
const fs = require('node:fs')

router.post('/login', (req,res,next)=>{
    let userData = {
        userName : req.body.username,
        password: req.body.password
    }

    var token = jwt.sign(userData, config.secretKey, {
        algorithm: config.algorithm, 
        expiresIn: config.expiresIn
    }
    );
    console.log('token',token);
    if(userData.userName === 'admin' && userData.password === 'admin@123'){
        fs.writeFile('./Authentication/token.txt', token, (err, data)=>{
            if(err) throw err;
            console.log(data);
        });
        res.status(200)
            .json({
                message : 'Login successful.',
                jwtToken : token
            })
    }else {
        res.status(401).json({
            message: 'Login failed.'
        })
    }
})

module.exports = router;