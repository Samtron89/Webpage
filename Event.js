// Variable for Timer & Buttons//
let intervalId;
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let moveImg = document.getElementById("Railway");

// Move Image//
function startMoving() {
    if (!startBtn.disabled){
        startBtn.disabled = true;
        stopBtn.disabled = false;
    moveImg.classList.add("animate-button");
    }
}

// Stop Image//
function stopMoving() {
    if (!stopBtn.disabled){
        stopBtn.disabled = true;
        startBtn.disabled = false; 
        moveImg.classList.remove("animate-button");
        
    }
}