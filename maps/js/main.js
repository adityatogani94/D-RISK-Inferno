
var FILE_MANAGER = new FileManager();

FILE_MANAGER.queueDownload('img/bg_image.png');
FILE_MANAGER.queueDownload('sound/1.mp3');
FILE_MANAGER.queueDownload('sound/2.mp3');
FILE_MANAGER.queueDownload('sound/3.mp3');
FILE_MANAGER.queueDownload('sound/4.mp3');

FILE_MANAGER.downloadAll(function() {
    Map.init();
    $("#overlay").fadeOut('slow');
});





