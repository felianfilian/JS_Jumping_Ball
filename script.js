window.onload = function () {

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    startGame();

    function startGame() {
        draw();
    }

    function draw() {

        ctx.rect(100, 100, 100, 100);
        ctx.stroke();
    }


}