const express = require('express');
const router = express.Router();
const pool = require('../DB/db');
pool.connect();
const { check, validationResult  } = require('express-validator')
const jwt = require('jsonwebtoken');
const globalConfig = require('../global.config')
// const fs = require('node:fs');
var users = {};

    pool.query(`SELECT * FROM users WHERE role='admin'`, (err, result)=>{
        if(err) throw err;
        if(result.rowCount !== 0){
            users = result.rows[0]
            // console.log('user', users);
            // userData = users.find((x)=> x.role === 'admin')
            // console.log("Admin userdata", userData);
        }else {
            console.log("Data not found!");
        }

    router.post('/', [
        check('username')
            .isLength({min:3}).withMessage("Username must be 3+ characters long.")
            .trim().notEmpty().withMessage("Username is required"),
        check('password')
            .notEmpty().withMessage("Password is required.")
            .isLength({max:10}).withMessage("Password must be at most 10 characters long.")    
    ], 
    (req, res, next)=>{
        // console.log("userssss",users);
        // var users = {username:"admin", password:""};
        const errors = validationResult(req);
        
        if(!errors.isEmpty()){
            return res.status(400).json({error:errors.array().map((val)=>val.msg)});
        }
        else
        {
            const loginData = {
                username : req.body.username,
                password : req.body.password
            }
            console.log("loginData", loginData);
            var token = jwt.sign(users, 
                            globalConfig.secretKey, 
                            {   
                                algorithm: globalConfig.algorithm, 
                                expiresIn: globalConfig.expiresIn
                            }); 

            if(loginData.username === users.username && loginData.password === users.password){
                // fs.writeFile('./Authentication/token.txt', token, (err,data)=>{
                //     if(err) console.log(err.message);
                //     if(data){
                //         console.log("Token stored!");
                //     }
                // });
                // res.status(200).json(
                //     {
                //         message:"logged in as admin.", 
                //         jwtToken: token
                //     });
                let options = {
                    httpOnly: true,
                    maxAge: 1000 * 60 * 15, //expires in 15 minutes
                }
                // res.setHeader('token', token);
                // console.log(res.getHeader('token'));
                res.setHeader('authorization', token);
                console.log('headers',res.getHeaders())
                // document.cookie('Jwttoken', token, options);
                // res.status(200).cookie('Jwttoken', token, options).json({message:'Logged in successfully.', token:token});
                res.status(200).json({message:'Logged in successfully.', token:token});


            }else {
                res.status(404).json("Wrong credentials!");
              

            }
        } 
    });
});
    
module.exports = router;