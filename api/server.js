const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const businessRoute = require('./business.route');

const dbRoute ='mongodb+srv://<username>:<password>@cluster0-ou56m.mongodb.net/test?retryWrites=true&w=majority';
mongoose.Promise = global.Promise;
mongoose.connect(dbRoute, { useNewUrlParser: true, useUnifiedTopology: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/business', businessRoute);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});
