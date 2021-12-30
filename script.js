window.onload = function () {

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    var dir = 0;
    var ballX = 300;
    var ballY = 350;
    var ballRadius = 50;

    var coinX = 300;
    var coinY = 200;

    var canvasX = 600;
    var CanvasY = 400;

    startGame();

    function startGame() {
        getInput();
        draw();
        setInterval(debug01, 100);
    }

    function draw() {

        if (dir == 1 && ballX < canvasX - ballRadius) { ballX += 5; }
        if (dir == 2 && ballX > ballRadius) { ballX -= 5; }
        if (dir == 3 && ballY < CanvasY - ballRadius) { ballY += 5; }
        if (dir == 4 && ballY > ballRadius) { ballY -= 5; }

        ctx.clearRect(0, 0, 600, 400);


        /// title text
        ctx.beginPath();
        ctx.font = "30px Arial";
        ctx.fillStyle = "#e0deff";
        ctx.fillText("Jumping Ball", 20, 50);

        /// coin
        ctx.beginPath();
        ctx.arc(coinX, coinY, 20, 0, 2 * Math.PI);
        ctx.fillStyle = "yellow";
        ctx.fill();
        ctx.stroke();

        /// ball
        ctx.beginPath();
        ctx.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.stroke();

        window.requestAnimationFrame(draw);

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

    }

    function debug01() {
        console.log(dir);
    }

}