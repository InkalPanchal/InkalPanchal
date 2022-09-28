const {open, readFile, access, constants, close} = require('fs');
// access
const file = 'newFile.txt'
access(file, constants.F_OK , (err)=>{
    console.log(`${file} ${err ? 'is not exists' : 'is exist' }`);
})

access(file, constants.R_OK, (err)=>{
    console.log(`${file} ${err ? 'is not readable':'is readable'}`);
})

access(file, constants.W_OK, (err)=>{
    console.log(`${file} ${err ? 'is not writeable' : 'is writeable'}`);
})

access(file, constants.W_OK | constants.R_OK, (err)=>{
    console.log(`${file} ${err ? 'is not' : 'is'} readable and writable`);
    
})

// open and readfile
open(file, 'r', (err,fd)=>{
    if(err){
        if(err.code === 'ENOENT'){
            console.error('file does not exist');
            return ;
        }
        throw err;
    }
    console.log("fd",fd);

    try {
        readFile(file, 'utf-8', (err, data)=>{
            if(err) console.log(err);
            console.log(fd);
            console.log(data);
        }
            )
    }finally {
        close(fd, (errr) =>{
            console.log("file closed");
            if(errr) throw errr;
        })
    }
})
//copy file

const fs = require('node:fs')
const util = require('node:util')
const src = 'source.txt'
const dest = 'destination.txt'
// if(!fs.existsSync(src), (err,d)=>{if(err) throw err;}){
//     fs.open(src, 'r+', (err,fd)=>{if(err)throw err; 
    
//         fs.copyFile(src, dest, (err,data)=>{
//             if(err) throw err;
//             console.log(`${src} is copied to ${dest}`);
//         })
//     })
    
// }

if(fs.existsSync(src)) {
    console.log("file exists");
    fs.writeFileSync(src, "Hello world", (e,d)=>{if(e) throw e;})

    fs.copyFile(src, dest, (err,data)=>{
        if(err) throw err;
        else {
            console.log("File copied to destination");
            // console.log(data);
            fs.unlink(src, (errrr, d)=>{
                if(errrr) throw errrr;
                console.log("file deleted successfully");
            })
        }
    })

}else {
    console.log("file not exists");
    fs.open(src, 'w', (err, fd)=>{
        if(err) console.log("error "+ err);
        console.log("Saved");
    });
}

//temp dir
const { tmpdir } = require('node:os') ;
const { mkdtemp } = require('node:fs');

// The parent directory for the new temporary directory
const tmpDir = tmpdir();

// This method is *INCORRECT*:
mkdtemp(tmpDir +'/', (err, directory) => {
  if (err) throw err;
  console.log();
  console.log("incorrect",directory);
  // Will print something similar to `/tmpabc123`.
  // A new temporary directory is created at the file system root
  // rather than *within* the /tmp directory.
});

// This method is *CORRECT*:
const { sep } = require('node:path');
const { buffer } = require('stream/consumers');
mkdtemp(`${tmpDir}${sep}`, (err, directory) => {
  if (err) throw err;
  console.log();
  console.log("correct",directory);
  // Will print something similar to `/tmp/abc123`.
  // A new temporary directory is created within
  // the /tmp directory.
});

// fs.rename('text.txt', 'renamed.txt', (err)=>{
//     if(err) throw err;
//     console.log("text.txt File renamed to renamed.txt");
// })

// fs.rm('./newFile.txt', (err)=>{
//     if(err) throw err
// })

fs.stat('./renamed.txt', (err,d)=>{
    if(err) throw err;
    console.log("status", d);
})



if(!fs.existsSync('newFolder')){

    fs.mkdir('newFolder', (err)=>{
        if(err) throw err;
        console.log("folder created");
    })
}

fs.open('./newFolder/newFile.txt', 'w', (err)=>{
    if(err) throw err
})

// fs.symlink('./app.js', './newFolder', (e,d)=>{
//     if(e) throw e;
//     console.log(d);
// })

fs.readdir('./newFolder',(err, d)=>{if(err) throw err; 
    console.log(d);
})

// fs.readlink('source.txt', (err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })

fs.access('text.txt', (err)=>{
    const name = util.getSystemErrorName(err.errno);
    console.error(name, 'file not found'); //ENOENT
})

fs.access('file.txt', (err)=>{
    const errMap = util.getSystemErrorMap(err);
    const name = errMap.get(err.errno);
    console.error(name);
})