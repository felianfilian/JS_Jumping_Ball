window.onload = function () {

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    var dir = 0;
    var ballX = 300;
    var ballY = 350;

    getInput();
    startGame();

    setInterval(debug01, 100);

    function startGame() {
        setInterval(draw, 32);
        //draw();
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
        ctx.arc(ballX, ballY, 50, 0, 2 * Math.PI);
        ctx.stroke();

    }

    function getInput() {
        // input buttons
        let btnUp = document.getElementById("up");
        let btnLeft = document.getElementById("left");
        let btnDown = document.getElementById("down");
        let btnRight = document.getElementById("right");

        btnUp.onmousedown = function () { dir = 4; }
        btnDown.onmousedown = function () { dir = 3; }
        btnLeft.onmousedown = function () { dir = 2; }
        btnRight.onmousedown = function () { dir = 1; }

        btnUp.ontouchstart = function () { dir = 4; }
        btnDown.ontouchstart = function () { dir = 3; }
        btnLeft.ontouchstart = function () { dir = 2; }
        btnRight.ontouchstart = function () { dir = 1; }

        btnUp.onmouseup = function () { dir = 0; }
        btnDown.onmouseup = function () { dir = 0; }
        btnLeft.onmouseup = function () { dir = 0; }
        btnRight.onmouseup = function () { dir = 0; }

        btnUp.ontouchend = function () { dir = 0; }
        btnDown.ontouchend = function () { dir = 0; }
        btnLeft.ontouchend = function () { dir = 0; }
        btnRight.ontouchend = function () { dir = 0; }

        if (dir == 1) { ballX += 50; }

    }

    function debug01() {
        console.log(dir);
    }

}