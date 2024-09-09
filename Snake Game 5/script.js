// Game Constant and Variables
let inputDir = {
    x : 0,
    y : 0
}
const foodSound = new Audio('music/food.mp3');
const gameOverSound = new Audio('music/gameover.mp3');
const moveSound = new Audio('music/move.mp3');
const musicSound = new Audio('music/music.mp3');
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [
    {x: 13, y : 15}
]
let food = {x: 5, y: 12}; 
const board = document.querySelector('.board'); 
let score = 0




// Game Functions
function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

function isCollide(sarr){
    return false;
}

function gameEngine(){
    // part 1 : updating the snake array & food

    if(isCollide(snakeArr)){
        gameOverSound.play();
        musicSound.pause();
        inputDir = {x: 0, y : 0};
        alert("Gave over, press any key to play again!")
        snakeArr = [{x:13,y:15}];
        musicSound.play();
        score = 0;
    };

    // if you have eaten the food then regenerate the food and increase the score 
    if(snakeArr[0].y === food.y && snakeArr[0].x === food.y){
        snakeArr.unshift({x : snakeArr[0].x + inputDir.x, y : snakeArr[0].y + inputDir.y})
        let a = 2; // grid from a point
        let b = 16; // grid from this point
        food = {x : Math.round(a + (b - a)*Math.random())}
    }

    // part 2 : display the snake and food

    // displaying the snake
    board.innerHTML = ''; 
    snakeArr.forEach((e, index)=>{
        let snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x; // Corrected typo
        if(index == 0){
            snakeElement.classList.add('head');
        } else {
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    });


    // displaying the food 
    let foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x; 
    foodElement.classList.add('food');
    board.appendChild(foodElement); 
}


// Main Logic starts here
window.requestAnimationFrame(main);


window.addEventListener('keydown', e=>{
    inputDir = {x : 0 , y : 1}; // start the game
    moveSound.play();

    switch(e.key){
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            break;
        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;
        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;
        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break;
    }
})