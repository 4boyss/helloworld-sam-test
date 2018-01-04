var express = require('express');
var app = express();

app.get('/', function (req, res){

res.send('Hello World!');
})
// http://localhost:3000/
app.listen(3000, () => {
console.log('Example app listening on port 3000!')
})
testing practice