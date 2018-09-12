const express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
//*********************************************//

app.get('/',function (req, res) {
  res.render('index');
});

//*********************************************//
app.listen(3000);
console.log('Wait port 3000.');
