const express = require('express');
const bodyParser = require('body-parser');

//set up the app to accept requests
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

//set up the connection to the database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {
	useUnifiedTopology: true,
	useNewUrlParser: true
});

const paste_schema = new mongoose.Schema({
	title: String,
	contents: String,
});

app.listen(3000, () => console.log('Server listening on port 3000!'));

