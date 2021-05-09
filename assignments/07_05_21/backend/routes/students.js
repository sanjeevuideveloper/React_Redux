var express = require('express');
var router = express.Router();
var mongoClient = require('mongodb').MongoClient;
var db;
/* GET users listing. */
router.get('/', function(req, res, next) {
		//this is connection string. means we tell mongod library the location of our mongodb software.
	//localhost means mongo database software is n the same computer where we have our express running.
	//in big application we will have separate computer in which mongo database is running and express will
	//run in a separate computer. in that case instead of localhost we can either write the ip address
	//or the website url where mongodb database is running
	//this is the url to connect express to mongo database. because mongodatabase is a separate software. 
	//so we need this url to connect to mongo database software
	var connectionString = 'mongodb://localhost:27017';
	mongoClient.connect(connectionString)
	//if successfully connected then the function inside then will run
	.then(function(client){
		//this line selects the database zenrays like use zenrays.
		db = client.db("zenrays");

		db.collection("students").find().toArray()
	  .then(function(results){
	  	console.log(results);
	  	//it converts the results to json and sends to the browser
	  	res.json(results);
	  })
	})
	.catch(function(error){
		console.log("SOme error came"+error);
	})
});
module.exports = router;
//create a collection called todos. 
//insde that put few todos with 3 things. name,status, and description.
//create a /todo url and show the json in that. 