
// document.getElementById("rock").addEventListener('click', () => playerChoice("rock"))
// document.getElementById("paper").addEventListener('click', () => playerChoice("paper"))
// document.getElementById("scissors").addEventListener('click', () => playerChoice("scissors"))


// function botChoice(){
//     let botChoice = Math.random()

//     if(botChoice < .33){
//         return "rock"
//     }
//     else if(botChoice < .66){
//         return "paper"
//     }
//     else{
//         return "scissors"
//     }
// }

// function playerChoice(choice){
    
//     let opponentChoice = botChoice()

//     if(choice === "rock" && opponentChoice === "scissors" || choice === "paper" && opponentChoice === "rock" || choice === "scissors" && opponentChoice === "paper"){
//         console.log(`You Win!.... Your Opponent chose ${opponentChoice}`)
//     }
//     else if(choice === opponentChoice){
//         console.log(`It's a Draw!.... Your Opponent chose ${opponentChoice}`)
//     }
//     else{
//         console.log(`You Lose!.... Your Opponent chose ${opponentChoice}`)
//     }
// }
// ["rock","paper","scissors"].forEach(selected => document.getElementById(selected).addEventListener('click', () => playerChoice(selected)))

// function botChoice(){
//     return Math.random() < .3 ? "rock"
//          : Math.random() < .6 ? "paper" 
//          : "scissors"
// }

// function playerChoice(choice){
//     const botsChoice = botChoice()
//     const rules = {rock: "scissors", paper: "rock", scissors: "paper"}
//     console.log(  botsChoice == rules[choice] ? `You win! your opponent chose ${botsChoice}`
//                 : choice == botsChoice ? `It's a draw! you both chose ${choice}`
//                 : `You lose! your oppenent chose ${botsChoice}`      
//                )
// }

// ['rock','paper','scissors'].forEach(choice => document.getElementById(choice).addEventListener('click', () => playerChoice(choice)))

// function botChoice(){
//     return Math.random() < .3 ? 'rock'
//          : Math.random() < .6 ? 'paper' : 'scissors'
// }

// function playerChoice(choice){

//     const botsChoice = botChoice()
//     const rules = {rock: "scissors", paper: "rock", scissors: "paper"}
//     console.log(botsChoice == rules[choice] ? `You win! your oppenent chose ${botsChoice}`
//     : choice == botsChoice ? `You draw! you both chose ${choice}` 
//     : `You lose! your oppenent chose ${botsChoice}`)

// }

['heads', 'tails'].forEach(choice => document.getElementById(choice).addEventListener('click', () => headsOrTails(choice)))
function headsOrTails(choice){
    const randomChoice = Math.random() < .5 ? "heads" : "tails"
    console.log(
        choice == randomChoice ? `You win! it landed on ${randomChoice}` : `You lose! it landed on ${randomChoice}`
    )
}