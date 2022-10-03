var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    'status':true,
    "payload":"hello user!"
  })
});

router.get('/example/a', (req, res, next)=>{
  console.log('Response will be sent by next function...');
  next();
},(req,res)=>{
  res.send("Hello from A");
})

const cb0 = (req, res, next)=>{
  setTimeout(()=>{console.log('CB0');}, 1000);
  // console.log('CB0');
  next();
}
const cb1 = (req, res, next)=>{
  setTimeout(()=>{console.log('CB1');},1000);
  // console.log('CB1');
  next();
}
const cb2 = (req, res)=>{
  setTimeout(()=>{res.send('Hello from C!')}, 1000);
  
}

router.get('/example/c', [cb0, cb1, cb2]);

router.get('/example/d', [cb0,cb1], (req,res,next)=>{
  console.log('response on next function...');
  next();
},(req,res)=>{
  setTimeout(() => {
    res.send("Hello form D!")
  }, 1000);
  
})

//file download
router.get('/file/Download', (req,res)=>{
  res.download('./hello.txt', (err)=>{if(err)console.log(err);});
});

router.post('/save', (req,res)=>{
  res.json({
    'status':true,
    'payload':req.body
  })
})
module.exports = router;
