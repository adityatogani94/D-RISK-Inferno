var express = require('express');
var path = require('path');
var app = express();


app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/public');
});

var server = require('http').createServer(app).listen(process.env.PORT || 8080);
var io = require('socket.io').listen(server);


io.sockets.on('connection', function (socket) {
	console.log("A new User Connected");
	socket. emit('connected', { message: "You are connected!", mySocketId:socket.id });


	socket.on('createNewGame', function (message) {
		console.log("New Game Request got");
		console.log("User who has joined is: ", message.name);
		var thisGameId = ( Math.random() * 100000 ) | 0;
		socket.emit('newGameCreated', {gameId: thisGameId, mySocketId: this.id, name:message.name});
		socket.emit('updateDetails', {gameId: thisGameId, name: message.name});
		socket.join(thisGameId.toString());
	});

	socket.on('inviteFriends', function (message) {
		if ( message.user1 != ''){
			console.log("Sending Email to user1");
			// Send Email to User1
		}
		if ( message.user2 != ''){
			console.log("Sending Email to user2");
			// Send Email to User2
		}
		if ( message.user3 != ''){
			console.log("Sending Email to user3");
			// Send Email to User3
		}
		if ( message.user4 != ''){
			console.log("Sending Email to user4");
			// Send Email to User4
		}
		if ( message.user5 != ''){
			console.log("Sending Email to user5");
			// Send Email to User5
		}
	});

	socket.on('joingamelobby', function (message) {
		console.log('New Join Room Request');
		console.log(socket.adapter.rooms);
		socket.emit('updateDetails', {gameId: message.gameId,name: message.name, socketid: message.socketid});
		var room = socket.adapter.rooms[message.gameId];
		if( room != undefined )
		{
			socket.join((message.gameId).toString());
			io.sockets.in(message.gameId).emit('playerJoinedRoom', {gameId: message.gameId,
				name: message.name, socketid: message.socketid});
			console.log(socket.adapter.rooms);
		}
		else
		{
			// Send Error Message
			//socket.emit('error',{message: "This room does not exist."} );
		}
	});

	socket.on('initGame', function (message) {
		console.log ("Game about to begin");
		console.log("The Game room is:"+ message.gameId + " and " +"The players are: " + message.users);
		io.sockets.in(message.gameId).emit('beginGame');
	});

	socket.on('loaded', function (message) {
		console.log("About to send init data");
		users = message.users;

		if (users.length == 2) {
			io.sockets.in(message.gameId).emit('init', "Alaska", "Red", users[0]);
			io.sockets.in(message.gameId).emit('init', "NorthWestTerritory", "Red", users[0]);
			io.sockets.in(message.gameId).emit('init', "Alberta", "Red", users[0]);
			io.sockets.in(message.gameId).emit('init', "WesternAustralia", "Blue", users[1]);
			io.sockets.in(message.gameId).emit('init', "EasternAustralia", "Blue", users[1]);
			io.sockets.in(message.gameId).emit('init', "NewGuinea", "Blue", users[1]);
		}

		if (users.length == 3){
			io.sockets.in(message.gameId).emit('init', "Alaska", "Red", users[0]);
			io.sockets.in(message.gameId).emit('init', "NorthWestTerritory", "Red", users[0]);
			io.sockets.in(message.gameId).emit('init', "Alberta", "Red", users[0]);
			io.sockets.in(message.gameId).emit('init', "WesternAustralia", "Blue", users[1]);
			io.sockets.in(message.gameId).emit('init', "EasternAustralia", "Blue", users[1]);
			io.sockets.in(message.gameId).emit('init', "NewGuinea", "Blue", users[1]);
			io.sockets.in(message.gameId).emit('init', "Yakutsk", "Yellow", users[2]);
			io.sockets.in(message.gameId).emit('init', "Kamchatka", "Yellow", users[2]);
			io.sockets.in(message.gameId).emit('init', "Irkutsk", "Yellow", users[2]);

		}

		if (users.length ==4) {
			io.sockets.in(message.gameId).emit('init', "Alaska", "Red", users[0]);
			io.sockets.in(message.gameId).emit('init', "NorthWestTerritory", "Red", users[0]);
			io.sockets.in(message.gameId).emit('init', "WesternAustralia", "Blue", users[1]);
			io.sockets.in(message.gameId).emit('init', "EasternAustralia", "Blue", users[1]);
			io.sockets.in(message.gameId).emit('init', "NorthAfrica", "Green", users[2]);
			io.sockets.in(message.gameId).emit('init', "Egypt", "Green", users[2]);
			io.sockets.in(message.gameId).emit('init', "Yakutsk", "Yellow", users[3]);
			io.sockets.in(message.gameId).emit('init', "Kamchatka", "Yellow", users[3]);
		}

		if (users.length ==5){
			io.sockets.in(message.gameId).emit('init', "Alaska", "Red", users[0]);
			io.sockets.in(message.gameId).emit('init', "NorthWestTerritory", "Red", users[0]);
			io.sockets.in(message.gameId).emit('init', "WesternAustralia", "Blue", users[1]);
			io.sockets.in(message.gameId).emit('init', "EasternAustralia", "Blue", users[1]);
			io.sockets.in(message.gameId).emit('init', "NorthAfrica", "Green", users[2]);
			io.sockets.in(message.gameId).emit('init', "Egypt", "Green", users[2]);
			io.sockets.in(message.gameId).emit('init', "Yakutsk", "Yellow", users[3]);
			io.sockets.in(message.gameId).emit('init', "Kamchatka", "Yellow", users[3]);
			io.sockets.in(message.gameId).emit('init', "GreatBritain", "Pink", users[4]);
			io.sockets.in(message.gameId).emit('init', "NorthernEurope", "Pink", users[4]);
		}

		if (users.length ==6){
			io.sockets.in(message.gameId).emit('init', "Alaska", "Red", users[0]);
			io.sockets.in(message.gameId).emit('init', "NorthWestTerritory", "Red", users[0]);
			io.sockets.in(message.gameId).emit('init', "WesternAustralia", "Blue", users[1]);
			io.sockets.in(message.gameId).emit('init', "EasternAustralia", "Blue", users[1]);
			io.sockets.in(message.gameId).emit('init', "NorthAfrica", "Green", users[2]);
			io.sockets.in(message.gameId).emit('init', "Egypt", "Green", users[2]);
			io.sockets.in(message.gameId).emit('init', "Yakutsk", "Yellow", users[3]);
			io.sockets.in(message.gameId).emit('init', "Kamchatka", "Yellow", users[3]);
			io.sockets.in(message.gameId).emit('init', "GreatBritain", "Pink", users[4]);
			io.sockets.in(message.gameId).emit('init', "NorthernEurope", "Pink", users[4]);
			io.sockets.in(message.gameId).emit('init', "Argentina", "Cyan", users[5]);
			io.sockets.in(message.gameId).emit('init', "Peru", "Cyan", users[5]);

		}



	});



	socket.on('deploy', function (message) {
		io.sockets.in(message.gameId).emit('deploy', message.country, message.count);
	});
	socket.on('attack', function (message) {
		io.sockets.in(message.gameId).emit('attack', message.country, message.count, message.color, message.owner);
	});
});




users = {};

/*
io.on('connection', function (socket) {
socket.on('new user', function(data, callback){
		if (data in users){
			callback(false);
		} else{
			callback(true);
			socket.nickname = data;
			users[socket.nickname] = socket;
			updateNicknames();
		}
	});
	
	function updateNicknames(){
		io.sockets.emit('usernames', Object.keys(users));
	}

	socket.on('send message', function(data, callback){
		var msg = data.trim();
		console.log('after trimming message is: ' + msg);
		if(msg.substr(0,3) === '/w '){
			msg = msg.substr(3);
			var ind = msg.indexOf(' ');
			if(ind !== -1){
				var name = msg.substring(0, ind);
				var msg = msg.substring(ind + 1);
				if(name in users){
					users[name].emit('whisper', {msg: msg, nick: socket.nickname});
					console.log('message sent is: ' + msg);
					console.log('Whisper!');
				} else{
					callback('Error!  Enter a valid user.');
				}
			} else{
				callback('Error!  Please enter a message for your whisper.');
			}
		} else{
			io.sockets.emit('new message', {msg: msg, nick: socket.nickname});
		}
	});
	
	socket.on('disconnect', function(data){
		if(!socket.nickname) return;
		delete users[socket.nickname];
		updateNicknames();
	});

socket.on('deploy', function (message) {
socket.broadcast.emit('deploy', message.country, message.count);
});
socket.on('attack', function (message) {
socket.broadcast.emit('attack', message.country, message.count, message.color, message.owner);


});

});



*/







