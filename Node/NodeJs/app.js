const http = require('http')
const fs = require('fs');
http.createServer(async (req, res)=>{
    if(req.url = '/'){
        fs.open('newFile.txt', 'w', (err,data)=>{
            if(err) throw err;
            res.write('1')
            res.write('file created')
        })
        
        fs.readFile('./text.txt', 'utf-8', (err, data)=>{
            res.writeHead(200, {'Content-type':'text/html'});
            res.write('2')
            res.write(data);
            // res.end();
        })
    }
    if(req.url = '/newFile'){
        if(fs.existsSync('./newFile.txt')){

            fs.writeFile('./newFile.txt', 'new file', (errr, d)=>{
                res.write('3')
                res.write("File is written")
            })
            fs.readFile('./newFile.txt', 'utf-8', (err,data)=>{
                if(err) throw err;
                res.write('4')
                res.write(data)
                res.end();
            })
        }
    }
}).listen(3001, ()=>{
    console.log("Listening on port 3001");
    console.log(require.main);
});

