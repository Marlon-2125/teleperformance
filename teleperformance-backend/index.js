const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

const { mongoose } = require('./database')

// Settings
app.set('port', process.env.PORT || 3000);

// Middelwares
app.use(morgan('dev'));
app.use(express.json());

app.use(cors({ origin: '//localhost:4200' }));

// Routes
app.use('/api/extra', require('./routes/extra.routes'));

// Starting Server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});


