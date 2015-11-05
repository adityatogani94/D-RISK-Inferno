
var FILE_MANAGER = new FileManager();

FILE_MANAGER.queueDownload('img/bg_image.png');
FILE_MANAGER.queueDownload('sound/1.mp3');
FILE_MANAGER.queueDownload('sound/2.mp3');
FILE_MANAGER.queueDownload('sound/3.mp3');
FILE_MANAGER.queueDownload('sound/4.mp3');

var socket = io('ws://localhost:8080/');
var players = [];
var usercolors = {};

FILE_MANAGER.downloadAll(function() {


    $("#overlay").fadeOut('slow');

	var mySocketId = "";
	var message = "";
	var gameId = "";
	var isHost = false;
	var name = "";

	socket.on('connected', function(data){
		mySocketId = data.mySocketId;
		message = data.message;
		console.log(message);
		console.log("Your Socket id is: ", mySocketId);

	});

	socket.on('newGameCreated', function(data){
		gameId = data.gameId;
		console.log("New Game Created with game id: ", gameId);
		console.log("Confirming Socket id: ", data.mySocketId);
		players.push(data.name);
		$('#welcome').append(data.name);
		$('#gameid').append(gameId);
		name = data.name;
		if (isHost) {
			$('#displayjoinedplayers').append(data.name + " has joined the room <br>");
		}
	});

	socket.on('playerJoinedRoom', function(data){
		console.log(data.name+" has joined the room");
		players.push(data.name);
		console.log(players);
		if (isHost) {
			$('#displayjoinedplayers').append(data.name + " has joined the room <br>");

		}
	});

	socket.on('beginGame', function(data){
		console.log("Start Game issued !!");
		$('#LobbyScreenWrapper').remove();
		$('#CreateScreenWrapper').remove();
		$('#HomeScreenWrapper').remove();
		$('#CanvasWrapper').show();
        Map.init();
		if (isHost) {
			socket.emit('loaded', {gameId: gameId, users: players, name: name});
			socket.emit('sendUserData', {gameId: gameId, users: players});
		}
	});

	socket.on('updateUserData', function(users){
		players = users;
		usercolors.user[0] = "red";
		usercolors.user[0] = "blue";
		usercolors.user[0] = "green";
		usercolors.user[0] = "red";
		usercolors.user[0] = "red";
		usercolors.user[0] = "red";
	});



	socket.on('updateState', function (name1, state1) {
		console.log(name);
		console.log(name1);
		$("#turnIndicator").empty();
		$("#turnIndicator").append(name1+"'s Turn");

		if (name == name1){
			Map.state = state1;
			console.log(Map.state);
			$("#popup").empty();
			$("#popup").append("Current Stage: None, Click on buttons to begin stage !");



		}

	});
	socket.on('gameFinished', function (name) {
		Map.state = "inactive";
		$('#CanvasWrapper').hide();
		$("#GameOver").append(name);
		$('#GameOver').show();
	});








	jQuery(function($) {
		$("#btnCreateSubmit").click(function () {
			$('#HomeScreenWrapper').hide();
			$('#CreateScreenWrapper').show();
			socket.emit('createNewGame', {name: $('#name').val()});
			isHost = true;
		});

		$("#btnJoinSubmit").click(function () {
			$('#HomeScreenWrapper').hide();
			$('#LobbyScreenWrapper').show();
			name = $('#name2').val();
			socket.emit("joingamelobby", {gameId: $('#enteredgameid').val(), name: $('#name2').val(), socketid: mySocketId})

		});

		$("#btnJoinLobby").click(function () {
			$('#CreateScreenWrapper').hide();
			$('#LobbyScreenWrapper').show();
			if (isHost) {
				$('#btnStartGame').show();
			}
			socket.emit('inviteFriends', {name: name, gameId: gameId, user1: $('#user1email').val(), user2: $('#user2email').val(),
				user3: $('#user3email').val(), user4: $('#user4email').val(), user5: $('#user5email').val(),
			})

		});

		$("#btnStartGame").click(function () {
			socket.emit("initGame", {gameId: gameId, users: players});
		});



	});




socket.on('init', function (country, color, owner, users) {
		console.log (country+color+owner);
		Map.setColor(country,color);
		Map.setOwner(country,owner);

});

socket.on('deploy', function (country, count) {
		Map.setArmyCount(country,count);
});

	socket.on('actionInfo', function (info) {
		$('#actionInfo').append(info +"<br>");
	});





socket.on('attack', function (country, count, color, owner) {
		Map.setArmyCount(country,count);
		Map.setColor(country,color);
		Map.setOwner(country,owner)
});


});





