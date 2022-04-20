let mongo-client = require("mongodb").MongoClient;
let ObjectId = require("mongodb").ObjectId;

let url = "mongodb://localhost/";
let db;

console.log("Iniciando script mongo-http");

mongo_client.conect(url, function(error, conn){
	console.log("Dentro de MongoDb");

	if(error){
	console.log("ERRROR!!!");
	return
	}
	db = conn.db("todolist");
	});
'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
http.createServer(function(req, res){
	res.writeHead(200);

	let tasks = db.collectiron("tasks").find();
	tasks.toArray(function(err, data){
		let tasks_string = JSON.stringify(data);
		res.write(tasks_string);
		res.end();
	});
})listen(3030);


