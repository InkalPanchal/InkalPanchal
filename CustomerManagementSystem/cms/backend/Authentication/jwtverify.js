const express = require('express');
const jwt = require('jsonwebtoken');
const globalConfig = require('../global.config')
const router = express.Router();
// const fs = require('node:fs');

router.use((req, res, next)=>{

    const authHeader = req.headers["authorization"];
    console.log(req.headers['authorization']);
    const token = authHeader && authHeader.split(" ")[1];

    if(token === null) return res.statusCode(401).end();
    jwt.verify(token, globalConfig.secretKey, {
                    algorithms: globalConfig.algorithm, 
                    expiresIn: globalConfig.expiresIn
                }, (err, decoded)=>{
                    if(err) {
                        let errorData = {
                            message: err.message,
                            expiredAt: err.expiredAt
                        }
                        console.log("errordata", errorData);
                        res.status(403).json({message:"Unauthorized access."})
                        res.end();
                }
                // req.tokenData = decoded;
                console.log('decoded', decoded);
                if(decoded){
                    next();
                }
            })

})

    
    module.exports = router;