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
        /// title text
        ctx.beginPath();
        ctx.font = "30px Arial";
        ctx.fillStyle = "#e0deff";
        ctx.fillText("Jumping Ball", 20, 50);

        /// ball
        ctx.beginPath();
        ctx.arc(300, 350, 50, 0, 2 * Math.PI);
        ctx.stroke();
    }


}