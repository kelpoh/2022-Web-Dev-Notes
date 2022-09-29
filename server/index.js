const express = require('express')
const app = express()

const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
  res.statusCode = 200; // 200 means the message was received and processed 
  res.setHeader('Content-Type', 'text/plain'); // tell the sever what content we're sending
  res.end('Hello World'); 
})

app.listen(port, hostname, () => { // register the server with the OS
    // the empty function serves as a callback function
  console.log(`Server running at http://${hostname}:${port}/`); // writes a message to our terminal
});                                                             // backtick creates a string template
    // this is so we can insert javascript into our string. in this case to reference our hostname and port