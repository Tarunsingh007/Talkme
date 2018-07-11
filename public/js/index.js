	var socket=io();

	socket.on('connect',function(){
		console.log('connected to server');
	});

	socket.on('newMessage',(message)=>{
		console.log(message);
	});



	socket.on('disconnect',function(){
		console.log('disconencted from server');
	});