var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('index', {title:'Express'})
});

router.get('/about', (req,res,next)=>{
  let responseText = 'Hello Wolrd!<br>'
  responseText += `<small>Requested at: ${req.requestTime}</small>`
  res.send(responseText);
})
// router.get('/ab?cd', (req,res,next)=>{
//   res.send('ab?cd')
// })
// router.get('/de+fg', (req,res,next)=>{
//   res.send('de+fg')
// })
// router.get('/xy*zw', (req,res,next)=>{
//   res.send('xy*zw')
// })
// router.get('/ab(cd)?e', (req, res) => {
//   res.send('ab(cd)?e')
// })
// router.get(/a/, (req,res,next)=>{
//   res.send('/a/');
// })
// router.get(/.*fly$/, (req,res,next)=>{
//   res.send('/.*fly$/')
// })
// router.get('/indx/'+/[0-9]/, (req,res,next)=>{
//   res.send('/0-9/')
// })

//allows number parameter
router.get('/user/:userId(\\d+)', (req,res,next)=>{
  res.send(req.params)
})

//allows number as well as string
router.get('/index/:indexId/books/:bookId', (req,res,next)=>{
  // res.send(req.headers)
  res.send(req.params)
})
router.get('/flights/:from(\\w+)-:to', (req,res,next)=>{
  res.send(req.params)
})
router.post('/add', (req,res, next)=>{
  // res.status(200).json({message:"Success"});
  res.send("posting")

})
router.put('/edit', (req,res,next)=>{
  res.send('Updating')
})

router.delete('/delete', (req,res, next)=>{
  res.send('deleting')
})

module.exports = router;
