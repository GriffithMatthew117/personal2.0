const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
var twilio = require('twilio');

const app = express();

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));


// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});


app.post('/index', (req, res) => {

  })

app.listen(8080);
console.log('Listening on that 8080 bump');