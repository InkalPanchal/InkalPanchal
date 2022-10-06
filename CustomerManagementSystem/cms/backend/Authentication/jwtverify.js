const express = require('express');
const jwt = require('jsonwebtoken');
const globalConfig = require('../global.config')
const router = express.Router();
// const fs = require('node:fs');

router.use((req, res, next)=>{
    // if(fs.existsSync('./Authentication/token.txt')){
    //     fs.readFile('./Authentication/token.txt', 'utf-8', (err, data)=>{
    //         if(err) throw err;

    //         // console.log('dataaaa', data);
    //         req.headers['token'] = data;
            
    //         // let token = req.headers['token']
    //         // console.log(req.headers['token']);
                
    //         if(req.headers['token'] !== undefined){
    //             console.log("tokennnnn", req.headers['token']);
    //             jwt.verify(req.headers['token'], globalConfig.secretKey, {
    //                     algorithms: globalConfig.algorithm, 
    //                     expiresIn: globalConfig.expiresIn
    //                 }, (err, decoded) =>{
    //                     if(err) {
    //                         let errorData = {
    //                             message: err.message,
    //                             expiredAt: err.expiredAt
    //                         }
    //                         console.log("errordata", errorData);
    //                         res.status(404).json({message:"Unauthorized! Provide json web token."})
    //                     }if(decoded){
    //                         console.log('decoded', decoded);
    //                         let decode = jwt.decode(req.headers['token'])
    //                         console.log("decoded",decode);
    //                         if(decode.role === 'admin') next();
                            
    //                     }
    //                 }
    //             )
    //         }else {
    //             res.status(403).json("Forbidden access.")
    //         }
    //     })
    // }
    // let  token = req.cookies['Jwttoken'];
    req.headers['authorization'] = req.cookies['Jwttoken'];

    const token = req.headers['authorization']
    console.log(req.headers['authorization']);
    if(req.headers['authorization'] !== undefined){
        console.log("tokennnnn", token);
        jwt.verify(token, globalConfig.secretKey, {
                algorithms: globalConfig.algorithm, 
                expiresIn: globalConfig.expiresIn
            }, (err, decoded) =>{
                if(err) {
                    let errorData = {
                        message: err.message,
                        expiredAt: err.expiredAt
                    }
                    console.log("errordata", errorData);
                    res.status(404).json({message:errorData})
                }if(decoded){
                    console.log('decoded', decoded);
                    let decode = jwt.decode(token)
                    console.log("decoded",decode);
                    if(decode.role === 'admin') next();
                    
                }
            }
        )
    }else {
        res.status(403).json("Forbidden access or token expired.")
    }

})

    
    module.exports = router;