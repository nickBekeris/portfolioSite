// Modules
var express        = require('express'),
    app            = express(),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    port           = 3001;

// get all data/stuff of the body parameters
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride('X-HTTP-Method-Override'));

// Routes
require('./app/routes')(app);

// Start app 
app.listen(port);	
console.log('Magic happens on port ' + port);