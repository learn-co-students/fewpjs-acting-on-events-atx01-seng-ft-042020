// Your code here

let dodger = document.getElementById('dodger');
dodger.style.backgroundColor = "#FF69B4";

console.log(dodger.style.left);
console.log(dodger.style.bottom);

let x = 180;

let speed = 4;
document.addEventListener('keydown', moveDodger);

function moveDodger(e) {
    if (e.key === "ArrowLeft" && x > 0) {
        moveDodgerLeft();
    } else if (e.key === "ArrowRight" && x + 40 < 400) {
        moveDodgerRight();
    }
}

function moveDodgerLeft() {
    x -= speed;
}

function moveDodgerRight() {
    x += speed;
}

function run() {
    dodger.style.left = `${x}px`;
    requestAnimationFrame(run);
}

run();