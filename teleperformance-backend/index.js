const express = require('express');
const morgan = require('morgan');
var bodyParser = require('body-parser');
const app = express();

const { mongoose } = require('./database')

// Settings
app.set('port', process.env.PORT || 3000);

// Middelwares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json());

// Routes
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, Origin, Content-Type, Accept');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

app.use('/api/extra', require('./routes/extra.routes'));

// Starting Server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});


