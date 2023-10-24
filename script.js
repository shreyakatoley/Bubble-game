let timer = 60;
let score = 0;
let hitrn;

//Function to calculate score
function increaseScore(){
  score += 10;
  document.querySelector("#score-elem").textContent = score;
}

//Function to calc hit target 
function getNewHit(){
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hit-elem").textContent = hitrn;
}

//Function to set the timer of 60 sec
function runtime(){
  let setTime = setInterval(() => {
    if(timer > 0){
      timer--;
      document.querySelector("#time-elem").textContent = timer;
    }else{
      clearInterval(setTime);
      document.querySelector("#pbtm").innerHTML = `<div><h1>Game Over</h1> <h1>Final Score: ${score}</h1> </div>`;
      
    }
  }, 1000);
}

//function to make bubbles
function makeBubble(){
  var clutter = "";//variable to store all bubble divs

  for(let i = 1; i<=168; i++){
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

document.querySelector("#pbtm").addEventListener('click', function(dets){
  let clickedNum = Number(dets.target.textContent);
  if(hitrn === clickedNum){
    increaseScore();
    makeBubble();
    getNewHit();
  }
})



runtime();
makeBubble();
getNewHit();
