const express = require('express');
const router = express.Router();
const jwtverify = require('../Authentication/jwtVerify')
const UsersDomain = require('../Domain/user.domain')
var usersData = new UsersDomain();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/users', (req,res,next)=>{
  usersData.getAllUsers(req, res);
});

router.use(jwtverify);
// GET user by id
router.get('/users/:id(\\d+)', (req, res, next)=>{
  usersData.getUserById(req, res);
})

// Update user
router.put('/users/:id(\\d+)', (req, res, next)=>{
  usersData.updateUser(req, res);
})

// delete user
router.delete('/users/:id(\\d+)', (req,res,next)=>{
  usersData.deleteUser(req, res);
})

//add new user
router.post('/users/add', (req, res, next)=>{
  usersData.addNewUser(req, res);
})

module.exports = router;
