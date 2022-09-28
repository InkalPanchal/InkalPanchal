const https = require('https');
  
// Sample URL
const url = 'https://api.github.com/users';
  
const request = https.request(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data = data + chunk.toString();
    });
  
    response.on('end', () => {
        // const body = JSON.parse(data);
        console.log(data);
    });
})
  
request.on('error', (error) => {
    console.log('An error', error);
});
  
request.end() 