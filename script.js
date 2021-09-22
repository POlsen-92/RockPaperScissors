//TODO: prompt user rock, paper or scissors, change input to lower case

let userChoice;
let compChoice;
var userScore = 0;
var compScore = 0;
var tieScore = 0;

//TODO: if they choose something else show alert saying "choose rock, paper, scissors" and repeat prompt

function makeUserChoice() {
    input = window.prompt('Choose rock, paper or scissors?', 'R, P or S');
    userChoice = input.toUpperCase();
    if (userChoice === 'R' || userChoice === 'P' || userChoice === 'S') {
        console.log(userChoice);
    } else {
        alert("Choose R, P or S")
        makeUserChoice();
    }
}

//TODO: Computer randomly chooses rock, paper, scissors using math.floor(math.random)

let = computerChoices = ['R','P','S']

function makeComputerChoice() {
    compChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]
    console.log(compChoice)
    return compChoice;
}

//TODO: Compare userChoice with compChoice using if/else
//TODO: show alert of who won using if else. Add who won to scoreboard

function compareChoices() {
    if (userChoice === compChoice) {
        alert("It's a Tie!")
        ++tieScore //Add score to tie
    } else if (userChoice === 'R') {
        if (compChoice === 'S') {
            alert('You Win!')
            ++userScore //add score to user
        } else {
            alert('Computer Wins!')
            ++compScore //add score to computer
        }
    } else if (userChoice === 'S') {
        if (compChoice === 'P') {
            alert('You Win')
            ++userScore //add score to user
        } else {
            alert('Computer Wins!')
            ++compScore //add score to Computer
        }
    } else if (userChoice === 'P') {
        if (compChoice === 'R') {
            if (compChoice === 'P') {
                alert('You Win')
                ++userScore //add score to user
            } else {
                alert('Computer Wins!')
                ++compScore //add score to Computer
            }
        }
    }
}

//TODO: Show score for wins

function showScore() {
    alert(
        'User Score: ' + userScore + '    ' +
        'Computer Score: ' + compScore + '    ' +
        'Tie: ' + tieScore)
}


//TODO: Give confirm for whether to play again 

function playAgain() {
    play = confirm('Play Again?')
    if (play) {
        playGame()
    } else {
        alert('Thanks for Playing!')
    }
}

//TODO: Make function that runs the entire game

function playGame() {
    makeUserChoice();
    makeComputerChoice();
    compareChoices();
    showScore();
    playAgain();
}

playGame();