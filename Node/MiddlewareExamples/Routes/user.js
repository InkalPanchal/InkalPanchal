const express = require('express');
const router = express.Router();
const fs = require('node:fs');
// router.use((req,res,next)=>{
//     console.log('Time', Date.now());
//     next();
// })
// router.use((req,res,next)=>{
//     if(!req.headers['x-auth']) return next('router');
//     next();
// })
router.use('/:id(\\d+)', (req,res,next)=>{
    console.log(`Request URL: ${req.originalUrl}`);
    next();
},(req,res,next)=>{
    console.log(`Request Method ${req.method}`);
    next();
})

router.get('/', (req,res,next)=>{
    res.status(200).send('URL '+ req.originalUrl + "   " + 'Status: '+ res.statusCode);
})

router.get('/:id(\\d+)', (req, res, next)=>{
    console.log(`ID: ${req.params.id}`);
    if(req.params.id === '0'){
        next('route');
    }else {
        next();
    }
}, (req,res)=>{
    res.render('regular')
});

router.get('/:id(\\d+)', (req,res,next)=>{
    res.render('special');
});

// router.get('/err', (req,res)=>{
//     throw new Error('BROKEN');
// })

//error handling middleware
router.get('/file', (req,res,next)=>{
    fs.readFile('/file-not-exist', (err,data)=>{
        if(err) {next(err);}
        else{
            res.send(data);
            
        }
    })
})
router.get('/writeFile',[(req,res,next)=>{
    fs.writeFile('/inaccessble-path', 'data', next)
}, (req,res)=>{
    res.send('OK');
}]);

router.get('/err', (req,res,next)=>{
    setTimeout(()=>{
        try {
            console.log('error');
            throw new Error('BROKEN');
        }catch(err){
            console.log(err.message);
            // next(err);
        }
    }, 100)
})



module.exports = router;