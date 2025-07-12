let gameSequence = [];
let userSequence = [];
let btns = ["yellow", "red", "blue", "green"];
let Started = false;
let level = 0;
let levels = document.querySelector("h3");

document.addEventListener("keypress", function () {
    if (Started == false) {
        console.log("Game Started");
        Started = true
        levelUP();
    }
});

function Flash(btn,className) {
    btn.classList.add(className);
    setTimeout(function () {
        btn.classList.remove(className);
    }, 500);
}

function levelUP() {
    userSequence = [];
    level++;
    levels.innerText = `Level ${level}`;

    let rndIndex = Math.floor(Math.random() * 4);
    let rndClolor = btns[rndIndex];
    let rndBtn = document.querySelector(`.${rndClolor}`);

    // console.log(rndIndex);
    // console.log(rndClolor);
    // console.log(rndBtn);

gameSequence.push(rndClolor);
console.log(gameSequence);
    Flash(rndBtn,"flash");
}

function btnPress() {
    // console.log(this);
    let btn = this;
    Flash(btn,"userflash");

    let userColor = btn.getAttribute("id");
    userSequence.push(userColor);
    console.log(userSequence);

    checkSequence(userSequence.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function checkSequence(index){
    // let index = level-1;

    if(userSequence[index] == gameSequence[index]){
        if(userSequence.length == gameSequence.length){
             setTimeout(levelUP,1000);
        }
    }
    else{
        levels.innerHTML = `Game Over! Your score was <b>${level}. <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor ="red";

        setTimeout(function(){document.querySelector("body").style.backgroundColor="white"},150)
        reset();
    }

}

function reset(){
    Started = false;
    gameSequence = [];
    userSequence = [];
    level = 0;
}