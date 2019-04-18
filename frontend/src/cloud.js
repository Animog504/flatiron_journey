
// var stage = new PIXI.Container();
var cloudManager;

document.addEventListener("DOMContentLoaded", function(event){
    //add cloud pictures
    PIXI.loader.add([
        "assets/cloud_1.png",
        "assets/cloud_2.png",
        { name: "loop2", url: "assets/loop2.mp3" }
    ],).load(init)

    function init() {
        renderer.backgroundColor = 0x22A7F0;
        cloudManager = new CloudManager();
        renderer.render(stage);
        loop();
    }
    //add loop for cloud images
    function loop() {
        cloudManager.update();
        requestAnimationFrame(loop);
        renderer.render(stage);
    }

})