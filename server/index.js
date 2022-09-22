const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => { // 
  res.statusCode = 200; // 200 means the message was received and processed 
  res.setHeader('Content-Type', 'text/plain'); // tell the sever what content we're sending
  res.end('Hello World'); 
});

server.listen(port, hostname, () => { // register the server with the OS
    // the empty function serves as a callback function
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log('Server running at http://' + hostname + ':' + port + '/'); // writes a message to our terminal
});                                                             // backtick creates a string template
    // this is so we can insert javascript into our string. in this case to reference our hostname and port
const nnn = function (paramName){ 

}

const obj = {
    vvv(){

    }
}

const fatArrow = X => X * 2; // this function has an automatic return and
                             // does not use a contextual basis for its "this" function