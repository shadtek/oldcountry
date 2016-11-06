var express = require('express');

// app setup
var app = express();
var router = express.Router();
var path = __dirname + '/public/';
var port = 8080;

// setup the app middlware
// app.use(express.static('./public'));

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(port, function() {
	console.log('Server up and running on port: ', port);
});

// node router example:
// var express = require("express");
// var app = express();
// var router = express.Router();
// var path = __dirname + '/views/';

// router.use(function (req,res,next) {
//   console.log("/" + req.method);
//   next();
// });

// router.get("/",function(req,res){
//   res.sendFile(path + "index.html");
// });

// router.get("/about",function(req,res){
//   res.sendFile(path + "about.html");
// });

// router.get("/contact",function(req,res){
//   res.sendFile(path + "contact.html");
// });

// app.use("/",router);

// app.use("*",function(req,res){
//   res.sendFile(path + "404.html");
// });

// app.listen(3000,function(){
//   console.log("Live at Port 3000");
// });