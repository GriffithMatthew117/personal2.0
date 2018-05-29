//import { normalize } from 'path';

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
var twilio = require('twilio');

const app = express();

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))


//Here we're setting the views directory to be ./views
//thereby letting the app know where to find the template files
app.set('views', './views');


app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname + '/public/ionicons'))
//Here we're setting the default engine to be ejs
//note we don't need to require it, express will do all that for us
app.set('view engine', 'ejs');

//Now instead of using res.send we can use
//res.render to send the output of the template by filename
app.get('/index', (req, res) => {
  res.render('index');
});

//var port = normalizePort(process.env.PORT || '8080');
var portInfo = process.env.PORT || '8080';
var port = parseInt(portInfo, 10);


app.listen(port, () => {
  console.log('listening at port ' + port)
});

app.get('/', (req, res) => {
  const data = {
    person: {
      firstName: req.body.name
    }
  }

  // Notice now the data is the second argument passed to the template render method
  res.render('index', data);
});