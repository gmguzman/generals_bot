// main.js
var io = require('socket.io-client');

var socket = io('http://botws.generals.io');

socket.on('disconnect', function() {
	console.error('Disconnected from server.');
	process.exit(1);
});

socket.on('connect', function() {
	console.log('Connected to server.');
	//do not reveal ID
	var user_id = 'INSERT_YOUR_ID';
	var username = '[Bot]SimplePBotAlpha'
	//set username with new updates
	socket.emit(set_username, user_id, username);
	
	
});
