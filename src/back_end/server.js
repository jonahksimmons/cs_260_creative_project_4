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
//reference '_id' by 'id' instead
/*paste_schema.virtual('id')
	.get(function() {
		return this._id.toHexString();
});*/
paste_schema.set('toJSON', { virtuals: true });

const Paste = mongoose.model('Paste', paste_schema);

//api
app.get('/api/pastes', async (request, result) => {
	try {
		let all_pastes = await Paste.find();
		result.send({all_pastes: all_pastes});
	} catch (error) {
		console.log(error);
		result.sendStatus(500);
	}
});

app.get('/api/:id', async (request, result) => {
	try {
		let selected_paste = await Paste.findOne({
			_id: request.parms.id
		});
		result.sendStatus(200);
	} catch (error) {
		console.log(error);
		result.sendStatus(500);
	}
});

app.post('/api/new', async (request, result) => {
	const new_paste = new Paste({
		title: request.body.title,
		contents: request.body.contents
	});
	try {
		await new_paste.save();
		result.sendStatus(200);
	} catch (error) {
		console.log(error);
		result.sendStatus(500);
	}
});

app.delete('/api/:id', async (request, result) => {
	try {
		let selected_paste = await Paste.deleteOne({
			_id: request.params.id
		});
		result.sendStatus(200);
	} catch (error) {
		console.log(error);
		result.sendStatus(500);
	}
});

app.listen(3000, () => console.log('Server listening on port 3000!'));

