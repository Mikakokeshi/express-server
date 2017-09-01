const express = require('express');
const app = express();


app.use(express.static(__dirname + '/public'));
app.use(function(req, res, next){
  console.log('my custom middleware!')
  next();
});


app.get('/', function(req, res){
  res.send('hello world')
});

app.get('/cats', function(req, res){
  res.send('meow meow')
});

app.get('/hello.txt', function(req, res) {
    res.sendfile(__dirname + '/public/hello.txt');
});


app.listen(3000, function() {
  console.log('Listening on port 3000!');
});

ap
