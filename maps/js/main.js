
var FILE_MANAGER = new FileManager();

FILE_MANAGER.queueDownload('img/bg_image.png');
FILE_MANAGER.queueDownload('sound/1.mp3');
FILE_MANAGER.queueDownload('sound/2.mp3');
FILE_MANAGER.queueDownload('sound/3.mp3');
FILE_MANAGER.queueDownload('sound/4.mp3');


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
});





