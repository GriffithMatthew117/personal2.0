const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
var twilio = require('twilio');

const app = express();


var accountSid = 'AC211492b5174e07ed6c58644c74b65aa6'; // Your Account SID from www.twilio.com/console
var authToken = '73dedda1ab9d02e27118cd6d6f86b13f'; // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello from Node',
    to: '+15634598306', // Text this number
    from: '+17608915959' // From a valid Twilio number
  })
.then((message) => console.log(message.sid));


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
    var accountSid = 'AC211492b5174e07ed6c58644c74b65aa6'; // Your Account SID from www.twilio.com/console
    var authToken = '73dedda1ab9d02e27118cd6d6f86b13f'; // Your Auth Token from www.twilio.com/console
  
    var twilio = require('twilio');
    var client = new twilio(accountSid, authToken);
  
  
    const data = {
      person: {
        firstName: req.body.firstName
      }
    }
  
    client.messages.create({
        name: req.body.firstName,
        email: req.body.email,
        object: req.body.subject,
        body: `${req.body.firstName}  just contacted you: Email: ${req.body.email} Subject: ${req.body.subject} Message: ${req.body.message}`,
        to: '+15634598306',
        from: '+17608915959'
      })
      .then((message) => {
        console.log(message.sid);
        console.log("Data is ", data);
        res.render('contact', data);
      });
  })

app.listen(8080);
console.log('Listening on that 8080 bump');