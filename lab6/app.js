import express from 'express';
import path from 'path';

var app = express();
const __dirname = path.resolve();

app.use(express.static(__dirname + '/script'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(8000);

console.log('Server is listening on port 8000');