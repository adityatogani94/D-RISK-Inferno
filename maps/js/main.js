
var FILE_MANAGER = new FileManager();

FILE_MANAGER.queueDownload('img/bg_image.png');
FILE_MANAGER.queueDownload('sound/1.mp3');

FILE_MANAGER.downloadAll(function() {
    Map.init();
    $("#overlay").fadeOut('slow');


});

function onConnect(text){
    document.getElementById('hello').innerHTML = text;
}