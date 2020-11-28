const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require("path")



const beer = require('./routes/beer');

//Student Side routes
var app = express();
const port = 5002||process.env.PORT;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));


//Client Side Pages
app.use('/', beer);


app.listen(port, () => {
  console.log(`Port: ${port}`);
});
