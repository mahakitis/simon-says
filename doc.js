let h = document.querySelector("h2");
let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "blue", "purple", "pink"];

let started = false;
let level = 0;

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game started!");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 250);
}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 100);
}

function levelUp() {
    userSeq = [];
    level++;
    h.innerText = `Level ${level}`;

    let random = Math.floor(Math.random() * 3);
    let randCol = btns[random];
    let randBtn = document.querySelector(`.${randCol}`)
    // console.log(randBtn);
    // console.log(random);
    // console.log(randCol);
    gameSeq.push(randCol);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx) {

    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp(), 1000);
        }
    } else {
        h.innerHTML = `Game Over! Your score was <b> ${level} </b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "#333";
        },150);
        reset();
    }
}

function btnPress() {
    //console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);

}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
};

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}