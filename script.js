let keepPlaying = true;
const stats = {
    results: {
        wins: 0,
        losses: 0,
        ties: 0
    },
    choices: {
        rock: 0,
        paper: 0,
        scissors: 0,
        lizard: 0,
        spock: 0
    }
}

function playGame() {

const userSelection = prompt(`R, P, L, K or S?`).toUpperCase()

if (userSelection != 'R' && userSelection != 'P' && userSelection != 'S'&& userSelection != 'K'&& userSelection != 'L') {
    alert(`pick R P L K or S, ya dingus!`)
    return
}

if (userSelection==='R') {
    stats.choices.rock++
} else if (userSelection==='P') {
    stats.choices.paper++
} else if (userSelection==='L') {
    stats.choices.lizard++
} else if (userSelection==='K') {
    stats.choices.spock++
}else {
    stats.choices.scissors++
}

const comInput = [`R`, `P`, `S`, `L`, `K`]

const comChoice = Math.floor(Math.random() * comInput.length)
alert(`computer chose ${comInput[comChoice]}`)


if (userSelection==comInput[comChoice]) {
    alert(`u tie 🤷‍♂️`)
    stats.results.ties++
    } else if (
    userSelection== `R` && comInput[comChoice]== `S` ||
    userSelection== `R` && comInput[comChoice]== `L` || 
    userSelection== `P` && comInput[comChoice]== `R` ||
    userSelection== `P` && comInput[comChoice]== `K` || 
    userSelection== `S` && comInput[comChoice]== `P` ||
    userSelection== `S` && comInput[comChoice]== `L` ||
    userSelection== `L` && comInput[comChoice]== `P` ||
    userSelection== `L` && comInput[comChoice]== `K`) {
        alert(`u win! 🎉`)
        stats.results.wins++
    } else  {
        alert(`u lose 😭`)
        stats.results.losses++
    }

}


while (keepPlaying) {
    playGame()
    keepPlaying = confirm("do you want to keep playing?")
}

alert(`thanks!
results:
    wins: ${stats.results.wins}
    losses: ${stats.results.losses}
    ties: ${stats.results.ties}

choices:
rock: ${stats.choices.rock}
paper: ${stats.choices.paper}
scissors: ${stats.choices.scissors}
lizard: ${stats.choices.lizard}
spock: ${stats.choices.spock}
`)