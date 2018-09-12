const express = require('express');
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false});
var app = express();
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));


app.get('/', function(req, res){
  res.render('index');
});

app.get('/foto', function(req, res){
  res.render('foto');
});

app.get('/excursions', function(req, res){
  res.render('excursions');
});

app.get('/shcool', function(req, res){
  res.render('shcool');
});

app.listen(3000);
