//this time using express
const express = require('express');
const app = express();
const port = 3000;
//a local path for an image
const filePath = __dirname+'/JDFJSDF.png';

//basic HTTP verb routing 

//respond with "hello world" when a get HTTP request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello get')
  });

  //respond with "hello world" when a post HTTP request is made to the homepage
  app.post('/', function (req, res) {
    res.send('hello post')
  });

  //respond with "hello world" when a put HTTP request is  made to the homepage
app.put('/', function (req, res) {
    res.send('hello put')
  });

//basic HTTP path routing


  //respond with a local image when a get HTTP request is made to the image page
  app.get('/image', function (req, res) {
    res.sendFile(filePath);
  });


//starting to listen to localhost on port 3000 
  app.listen(port, () => console.log(`Basic routing server is listening on port ${port}!`));
