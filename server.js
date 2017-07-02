const express = require ('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const mongoose = require('mongoose');


app.use(express.static('static'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// SCHEMA SETUP
// const EmailSchema = new mongoose.Schema({
// 	name: String,
// 	email: String
// })

// const List = mongoose.model("List", EmailSchema) 

app.get('*', (req,res) => {
	res.sendFile(path.resolve(__dirname + '/static/index.html' ));
})

// app.post('*', (req,res) => {
// 	var name = req.body.name;
// 	var email = req.body.email;
// 	var newEmail = {name: name, email: email};
// 	EmailList.create(newEmail, (err,emailAdd) => {
// 		if(err) {
// 			console.log(err);
// 		}
// 		else {
// 			res.redirect(req.get('referer'));
// 		}
// 	})
// })

app.listen(3000,() => {
	console.log('App has started on port 3000')
});