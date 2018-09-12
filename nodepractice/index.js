const express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
//*********************************************//

app.get('/',function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/news/:id',function (req, res) {
  res.render('news', {newsID: req.params.id});
});

//*********************************************//
app.listen(3000);
console.log('Мы лтслеживаем порт 3000.');
