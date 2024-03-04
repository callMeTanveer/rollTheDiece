let rollBtn = document.querySelector("#rollDices"); 
let player1img = document.getElementById("player1img");
let player2img = document.getElementById("player2img"); 
let msg = document.querySelector("#result-msg"); 

let player1Win = true; 
function generateRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

rollBtn.addEventListener("click", () => {
    rollBtn.innerText = "Roll Again !"
    const player1 = generateRandomNumber(); 
    const player2 = generateRandomNumber(); 

    player1img.src = `./images/dice${player1}.png`; 
    player2img.src = `./images/dice${player2}.png`; 

    if(player1 > player2){
        msg.innerText ="Congrats, Player 1 won!!"
    }
    else if(player1 < player2){
        msg.innerText = "Congrats, Player 2 won!!"
    }
    else {
        msg.innerText = "Draw! Roll Again."
    }

    
})