var express = require('express');
var routes = require("./routes");
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', routes.index);

app.post('/create_room/', routes.create_room);
app.post('/room/:id', routes.room);

io.sockets.on('connection', function (socket) {
  console.log('connection:');

  socket.on('join', function(roomname){
    socket.join(roomname);
  });

  socket.on('disconnect', function () {
    console.log ('disconnect:');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
