// Require necessary libraries
var http = require('http');
var path = require('path');
var express = require('express');
//var ble = require('noble');
var ioLib = require('socket.io');

// CONFIG (change these)
var port = process.env.PORT || 8080;
var employee =[
                {name:"Chris",mac:"mac1",status:"in"},
                {name:"Austin",mac:"mac2",status:"out"}
              ];


// Create the express app
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.render('index', {
    title:"In / Out Board",
    employee:employee,
  });
});

// Handle unexpected server errors
app.use(function(err, req, res, next) {
  console.log(err.stack);
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});

var sockets = [];
var server = http.Server(app);
var io = ioLib(server);

io.on('connection',function(socket){
  // add new client to array of clients upon connection
  sockets.push(socket);
  socket.emit('change',employee);

// test function to verify sockets and jquery updating of buttons is working
  setInterval(function(){
    if(employee[0].status == 'out'){
      employee[0].status = 'in';
    }else{
      employee[0].status='out';
    }
    socket.emit('change',employee);
    console.log('emitted : ',employee);
  },3000);


});

// Start the app
server.listen(port, function() {
});



