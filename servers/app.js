var path=require('path');
var http=require('http');
var express=require('express');
var socketIO=require('socket.io');
var port=process.env.PORT || 3000;
var app=express();
var server=http.createServer(app);
var io=socketIO(server);

app.use(express.static(__dirname+'/../public'));

io.on('connection',(socket)=>{
console.log('new user connected');

socket.on('createMessage',(message)=>{
console.log(message);
io.emit('newMessage',{
from:message.from,
text:message.text,
createdAt:new Date().getTime()
});
});

socket.on('disconnect',()=>{
console.log('user disconnected');
});

});


server.listen(port,function(){
	console.log(`server is up on ${port}`);
});

