var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var PORT = process.env.PORT || '3000';

app.use(express.static('public'));
app.use(bodyParser.json());

app.listen(PORT, function() {
  console.log('Listening on port ' + PORT);
});
