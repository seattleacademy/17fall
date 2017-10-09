var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

function turnCube(face,amount){
	console.log("face",face,"amount",amount);
}

io.on('connection', function(socket){
  socket.on('turn cube', function(msg){
  	turnCube("U","-1");
  	console.log("turn cube",msg)
    io.emit('turn cube', msg);
  });

  socket.on('chat message', function(msg){
  	console.log("received message",msg)
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
