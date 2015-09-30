var express = require('express');
var helloselena = express();

var router = express.Router();

// Provide all routes here, this is for Home page.

router.get("/",function(req,res){
  res.json({"message" : "Hello World"});
});

// Tell express to use this router with /api before.
// You can put just '/' if you don't want any sub path before routes.

helloselena.use("/api",router);

// Listen to this Port

helloselena.listen(3000,function(){
  console.log("Live at Port 3000");
});

//helloselena.get('/', function(req, res) {
//	res.send('Hello Selena!');
//});
//helloselena.listen(3000);

//1. New Web Server
//var http = require('http');
//http.createServer(function (req, res) {
//  res.writeHead(200, {'Content-Type': 'text/plain'});
//  res.write("Hello World\n");
//  res.end();
//}).listen(8888);
//console.log('Server running at http://127.0.0.1:8888/');

//2. HTTP route GET / and POST
//function indexRoute(req, res){	
//	helloselena.get('/home', routes.home.index);
//}
