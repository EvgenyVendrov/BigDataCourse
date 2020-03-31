//require is a function which allows us to fetch the exports of some specified module, 'http' in this case, we save it as an object 
const http = require('http');
//constant var to hold 'localhost' IP
const hostname = '127.0.0.1';
//some arbitrary port number 
const port = 3000;

//using the 'http.createServer' function, which gets its callback as an argument (here we implemented the callback using lambda-syntax)
const server = http.createServer((req, res) => {
    //res is the HTTP response object
    //we give it 2XX status which means - 'successful'
    res.statusCode = 200;
    //setting the HTTP header to an 'only plain text resource'
    res.setHeader('Content-Type', 'text/plain');
    //completing the response and adding the text 'Hello World' - which will be seen in the HTML
    res.end('Hello World');
  });

//setting a listener on localhost and port 3000, provided function is the backlog  
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
