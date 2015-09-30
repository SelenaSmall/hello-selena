var express = require('express');
var helloselena = express();

helloselena.get('/', function(req, res) {
	res.send('Hello Selena!');
});
helloselena.listen(3000);

//1. New Web Server
//var http = require('http');
//http.createServer(function (req, res) {
//  res.writeHead(200, {'Content-Type': 'text/plain'});
//  res.write("Hello World\n");
//  res.end();
//}).listen(8888);
//console.log('Server running at http://127.0.0.1:8888/');

//2. HTTP route GET / and POST
function homeRoute(req, res){	
	helloselena.get('/home', routes.home.index);
}

