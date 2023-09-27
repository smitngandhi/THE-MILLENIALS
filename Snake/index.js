const playBoard = document.querySelector(".PlayArea");
const scoreElement = document.querySelector(".score");
const highscoreElement = document.querySelector(".high-score");
const controls = document.querySelector(".controls i");
let foodX,foodY;
let snakeX=5,snakeY=10;
let speedX=0,speedY=0;
let snakebody = [];
let gameover = false;
let restartgame;
let score = 0;
let highscore = localStorage.getItem("high-score") || 0;
highscoreElement.innerText=`High-Score: ${highscore}`;
const changeFoodPosition = () =>
{
    foodX= Math.floor(Math.random()*30)+1;
    foodY= Math.floor(Math.random()*30)+1;
}
const gameend = () =>
{
    clearInterval(restartgame);
    alert("Game is over! Press OK to replay...");
    location.reload();
} 
const changeDirection = (e) => 
{
    if(e.key == "ArrowUp" && speedY!=1)
    {
        speedX=0;
        speedY=-1;
    }
    else if(e.key == "ArrowDown" && speedY!=-1)
    {
        speedX=0;
        speedY=1;
    }
    else if(e.key == "ArrowLeft" && speedX!=1)
    {
        speedX=-1;
        speedY=0;
    }
    else if(e.key == "ArrowRight" && speedX!=-1)
    {
        speedX=1;
        speedY=0;
    }
}
function btn(e)
 {
    if(e=="up" && speedY != 1)
    {
      speedX = 0;
      speedY = -1;
    }
    else if(e=="down" && speedY != -1)
    {
      speedX = 0;
      speedY = 1;
    }
    else if(e=="left" && speedX != 1)
    {
      speedX = -1;
      speedY = 0;
    }
    else if(e=="right" && speedX != -1)
    {
      speedX = 1;
      speedY = 0;
    }
  }
const Game=()=>
{
    if(gameover)
    {
        return gameend();
    }
    let foodplace = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;
    if(snakeX==foodX && snakeY==foodY)
    {
        changeFoodPosition();
        snakebody.push([foodX,foodY]);
        score++;
        if(score>=highscore)
        {
            highscore=score;
        }
        localStorage.setItem("high-score",highscore);
        scoreElement.innerText=`Score: ${score}`;
        highscoreElement.innerText=`High-Score: ${highscore}`;
    }
    snakeX+=speedX;
    snakeY+=speedY;
    for(let i=snakebody.length - 1;i>0;i--)
    {
        snakebody[i]=snakebody[i-1];
    }
    snakebody[0]=[snakeX,snakeY];
    if(snakeX<=0 || snakeX>30 || snakeY<=0 || snakeY>30)
    {
        gameover=true;
    }
    for(let i=0;i<snakebody.length;i++)
    {
        foodplace += `<div class="snakehead" style="grid-area: ${snakebody[i][1]} / ${snakebody[i][0]}"></div>`;
        if(i!=0 && snakebody[0][1]==snakebody[i][1] && snakebody[0][0]==snakebody[i][0])
        {
            gameover=true;
        }
    }
    playBoard.innerHTML=foodplace;
}
changeFoodPosition();
restartgame=setInterval(Game,125);
document.addEventListener("keydown",changeDirection);
function pause()
{
    clearInterval(restartgame);
    var pausedisplay = document.getElementById("stopdisplay");
    var element = document.getElementById("snakeBoard");
    pausedisplay.style.display = "block";
    pausedisplay.style.color = "white";
    element.style.background = "#A0A1A4";
    element.style.opacity = "0.3";
}
function play()
{
    restartgame = setInterval(Game, 125);
    var pausedisplay = document.getElementById("stopdisplay");
    var element = document.getElementById("snakeBoard");
    pausedisplay.style.display = "none";
    pausedisplay.style.color = "white"; 
    element.style.opacity = "1";
    element.style.background = "#212837"; 
}
function restart()
{
    location.reload();
}
