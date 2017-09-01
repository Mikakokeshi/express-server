const express = require('express');
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')

// middleware
app.use(express.jason());
app.use(express.urlencoded());
app.use(express.static(__dirname + '/public'));
app.use(function(req, res, next){
  console.log('my custom middleware!')
  next();
});

app.get('/new', function(req, res){
  res.render('new');
});

app.post('/create', function(req, res){
  res.send(req.body.name);
});

app.get('/', function(req, res){
  res.render('index', {title: 'Welcome'});
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
