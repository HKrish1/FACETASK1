let rockBtn = document.querySelector ("#rockBtn");
let scissorsBtn = document.querySelector ("#scissorsBtn");
let paperBtn = document.querySelector ("#paperBtn");
let gameHistory = document.querySelector ("#gameHistory");
let quit=document.querySelector("#quit")

rockBtn.addEventListener ("click", rockFunction);
scissorsBtn.addEventListener ("click", scissorsFunction);
paperBtn.addEventListener ("click", paperFunction);
quit.addEventListener ("click", quitfunction);

let playerScore = 0;
let botScore = 0;
document.querySelector("#displayPlayerScore").innerHTML=playerScore;
document.querySelector("#displayBotScore").innerHTML=botScore;

function quitfunction(){
     if (playerScore > botScore){
       alert ("GAME OVER, YOU WIN!")  
     }else if(botScore == playerScore){
       alert ("GAME OVER, DRAW!")  
     }
     else{
       alert ("GAME OVER, BOT WINS!") 
  }
}

function rockFunction (){
    let botOptions = ["Rock", "Paper", "Scissors"];
    let choiceNumber = Math.floor (Math.random () * 3);
    let botChoice = botOptions [choiceNumber];
    let li = document.createElement ("li");

    document.querySelector("#displayBotAnswer").innerHTML=botChoice;
     if( botChoice == "Rock"){
        document.querySelector ("#displayResult").innerHTML = "It's a Tie";
        li.classList ="list";
        li.textContent = "Rock Vs Rock. Draw. Try Again";
        gameHistory.appendChild(li);
     }else if(botChoice == "Paper"){
         document.querySelector ("#displayResult").innerHTML = "Computer Won";
         botScore++;
         document.querySelector ("#displayBotScore").innerHTML = botScore;
         li.textContent = "Rock Vs Paper. Computer Won";
         gameHistory.appendChild(li);
     }else{
         document.querySelector ("#displayResult").innerHTML = "Player Won";
         playerScore++;
         document.querySelector ("#displayPlayerScore").innerHTML = playerScore;
         li.textContent = "Rock Vs Scissors. Player Won";
         gameHistory.appendChild(li);
         }   
}

function scissorsFunction (){
    let botOptions = ["Rock", "Paper", "Scissors"];
    let choiceNumber = Math.floor (Math.random () * 3);
    let botChoice = botOptions [choiceNumber];
    let gameHistory = document.querySelector ("#gameHistory");
    let li = document.createElement ("li");

    document.querySelector("#displayBotAnswer").innerHTML=botChoice;
     if( botChoice == "Scissors"){
        document.querySelector ("#displayResult").innerHTML = "It's a Tie";
        li.textContent = "Scissors Vs Scissors. Draw. Try Again";
        gameHistory.appendChild(li);
     }else if(botChoice == "Rock"){
        document.querySelector ("#displayResult").innerHTML = "Computer Won";
        botScore++;
        document.querySelector ("#displayBotScore").innerHTML = botScore;
        li.textContent = "Scissors Vs Rock. Computer Won";
        gameHistory.appendChild(li);
     }else{
         document.querySelector ("#displayResult").innerHTML = "Player Won";
         playerScore++;
         document.querySelector ("#displayPlayerScore").innerHTML = playerScore;
         li.textContent = "Scissors Vs Paper. Player Won";
         gameHistory.appendChild(li);
         }     
}

function paperFunction (){
    let botOptions = ["Rock", "Paper", "Scissors"];
    let choiceNumber = Math.floor (Math.random () * 3);
    let botChoice = botOptions [choiceNumber];
    let gameHistory = document.querySelector ("#gameHistory");
    let li = document.createElement ("li");

    document.querySelector("#displayBotAnswer").innerHTML=botChoice;
     if( botChoice == "Paper"){
        document.querySelector ("#displayResult").innerHTML = "It's a Tie";
        li.textContent = "Paper Vs Paper. Draw. Try Again";
        gameHistory.appendChild(li);
     }else if(botChoice == "Scissors"){
        document.querySelector ("#displayResult").innerHTML = "Computer Won";
        botScore++;
        document.querySelector ("#displayBotScore").innerHTML = botScore;
        li.textContent = "Paper Vs Scissors. Computer Won";
        gameHistory.appendChild(li);
     }else{
         document.querySelector ("#displayResult").innerHTML = "Player Won";
         playerScore++;
         document.querySelector ("#displayPlayerScore").innerHTML = playerScore;
         li.textContent = "Paper Vs Rock. Player Won";
         gameHistory.appendChild(li);    
         } 
}