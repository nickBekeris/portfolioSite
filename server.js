// Modules
var express        = require('express'),
    app            = express(),
    mongoose       = require('mongoose'),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    db             = require('./config/db'),
    port           = 3003;

mongoose.connect(db.url); 

// get all data/stuff of the body parameters
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(methodOverride());

app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));

// Routes
require('./app/routes')(app);

// Start app 
app.listen(port);	
console.log('Magic happens on port ' + port);