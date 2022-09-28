const http = require('http');
// var agent = new http.Agent({});

// const aliveAgent = new http.Agent({keepAlive:true, maxSockets:0, maxSockets:5});
// const createConn = aliveAgent.createConnection;
// console.log("createCon " , createConn);
// console.log("connection created");
// const newConn = agent.createConnection
// console.log("newConn ", newConn);
// console.log("connection created");

// http.get({
//     hostname: 'localhost',
//     port: 4000,
//     path: '/',
//     agent: false  // Create a new agent just for this one request
//   }, (res) => {
//     // console.log(res.headers);
//   });
const fs= require('fs');
const url = require('url')
http.createServer( function (request, response) {  
  var pathname = url.parse(request.url).pathname;
  
  console.log("Request for " + pathname + " received.");
  fs.readFile(pathname.substr(1), function (err, data) {
     if (err) {
        console.log(err);
        response.writeHead(404, {'Content-Type': 'text/html'});
     } else {	
        response.writeHead(200, {'Content-Type': 'text/html'});	
        response.write(data.toString());		
     }
     response.end();
  });   
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');