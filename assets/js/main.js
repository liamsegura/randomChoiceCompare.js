['heads', 'tails'].forEach(choice => document.getElementById(choice).addEventListener('click', () => headsOrTails(choice)))
function headsOrTails(choice){
    const randomChoice = Math.random() < .5 ? "heads" : "tails"
    console.log(
        choice == randomChoice ? `You win! it landed on ${randomChoice}` : `You lose! it landed on ${randomChoice}`
    )
}