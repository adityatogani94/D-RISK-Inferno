
var FILE_MANAGER = new FileManager();

FILE_MANAGER.queueDownload('img/bg_image.png');
FILE_MANAGER.queueDownload('sound/1.mp3');
FILE_MANAGER.queueDownload('sound/2.mp3');
FILE_MANAGER.queueDownload('sound/3.mp3');
FILE_MANAGER.queueDownload('sound/4.mp3');

var socket = io('ws://54.186.29.28:8080/');
//Map.setColor()
FILE_MANAGER.downloadAll(function() {
    Map.init();
	Map.setColor("India",'red');
	Map.setOwner("India","player1");
	Map.setColor("Siam",'red');
	Map.setOwner("Siam","player1");
	Map.setColor("China",'red');
	Map.setOwner("China","player1");
	Map.setColor("MiddleEast",'red');
	Map.setOwner("MiddleEast","player1");
    $("#overlay").fadeOut('slow');

socket.on('deploy', function (country, count) {
Map.setArmyCount(country,count);
});

socket.on('attack', function (country, count, color, owner) {
Map.setArmyCount(country,count);
Map.setColor(country,color);
Map.setOwner(country,owner)
});


});





