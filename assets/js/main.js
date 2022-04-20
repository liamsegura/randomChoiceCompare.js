['rock','paper','scissors'].forEach(choice => document.getElementById(choice).addEventListener('click', () => playerChoice(choice)))

function botChoice(){
    return Math.random() < .3 ? 'rock'
         : Math.random() < .6 ? 'paper' : 'scissors'
}

function playerChoice(choice){

    const botsChoice = botChoice()
    const rules = {rock: "scissors", paper: "rock", scissors: "paper"}
    console.log(botsChoice == rules[choice] ? `You win! your oppenent chose ${botsChoice}`
    : choice == botsChoice ? `You draw! you both chose ${choice}` 
    : `You lose! your oppenent chose ${botsChoice}`)

}