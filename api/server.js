var express = require('express'),
app = express(),
path = require('path'),
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
cors = require('cors'),
port = process.env.PORT || 3000,
database = require('./movie.database')

const movieRoutes = require('./routes/movie.router');
mongoose.Promise = global.Promise;
mongoose.connect(database.database, { useNewUrlParser: true }).then( () => {
    console.log('Database is connected...')
    },
    (err) => { console.log(err) }
);

app.use(express.static(path.join(__dirname, './dist')));

app.use(bodyParser.json());
app.use(cors());
app.use('/movies', movieRoutes);

app.listen(port, console.log('Listening on port ' + port));