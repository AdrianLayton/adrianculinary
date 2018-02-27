const express = require ('express');
const bodyParser = require('body-parser');
const path = require('path');
const AWS = require('aws-sdk')
const app = express();

var dbFunc = require("./dbfunc");
 

app.use(express.static('static'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// ******** AWS STUFF ********
AWS.config.update({
	region: 'us-east-1'
});
AWS.config.dynamodb = {
	endpoint: 'dynamodb.us-east-1.amazonaws.com'
};



let docClient = new AWS.DynamoDB.DocumentClient();
	
// ******** UNCOMMENTED IN PRODUCTION ********
let myCredential = AWS.config.getCredentials(function(err) {
  if (err) console.log(err.stack); 
  else console.log('Access Key and SecretAccessKey Obtained');
});


app.get('/', (req,res) => {
	res.sendFile(path.resolve(__dirname + '/static/index.html' ));
})

app.post('/', (req,res) => {
	var table = "AC-Eml"
	var email = req.body.email;
	console.log(email + table);

	const params = {
		TableName: table,
		Item: {
		email: email,
	};

	docClient.put(params, (err, data) => {
		if (err) console.log(err)
			else console.log(`Email:${data.Item.email} has been added`);
	})
	res.redirect("/");
})


app.listen(3000,() => {
	console.log('App has started on port 3000')
});