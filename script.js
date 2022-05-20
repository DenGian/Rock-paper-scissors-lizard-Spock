const selectionButtons = document.querySelectorAll('[data-selection]') // so the value of the button clicked is known
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]') //
const SELECTIONS = [ // array of all possible selections
    {
        name: 'rock', // choice
        emoji: '✊', // visual output of choice
        beats:'scissor' // what it beats
    },
    {
        name: 'spock',
        emoji: '🖖',
        beats:'scissor'
    },
    {
        name: 'rock',
        emoji: '✊',
        beats:'lizard'
    },
    {
        name: 'paper',
        emoji: '🤚',
        beats:'spock'
    },
    {
        name: 'scissor',
        emoji: '✌️',
        beats:'paper'
    },

    {
        name: 'lizard',
        emoji: '🦎',
        beats:'spock'
    },
    {
        name: 'scissor',
        emoji: '✌️',
        beats:'lizard'
    },
    {
        name: 'lizard',
        emoji: '🦎',
        beats:'paper'
    },
    {
        name: 'spock',
        emoji: '🖖',
        beats:'rock'
    },
    {
        name: 'paper',
        emoji: '🤚',
        beats:'rock'
    },
]

selectionButtons.forEach(selectionButton =>{ // looping through all selections to find chosen selection
    selectionButton.addEventListener('click', () => { // onClick code needs to be run
        const selectionName = selectionButton.dataset.selection // give the name defined earlier
        const selection = SELECTIONS.find(selection => selection.name === selectionName) // passing down individual selection
        makeSelection(selection)
    })
})
function makeSelection(selection) {
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)

    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(selection, yourWinner)

    if (yourWinner) incrementScore(yourScoreSpan)
    if (computerWinner) incrementScore(computerScoreSpan)
}

function incrementScore (scoreSpan){
    scoreSpan.innerText = parseInt(scoreSpan.innerText) +1
}

function addSelectionResult (selection, winner){ // visual representation of whom won
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)
}

function isWinner(selection, opponentSelection){ // to determine the winner
    return selection.beats === opponentSelection.name
}

function randomSelection (){ //
    const randomIndex = Math.floor( Math.random() * SELECTIONS.length) //
    return SELECTIONS[randomIndex] // give back random selection between 0-9 every time function is called
}

function reset (){ // function to reset page
    yourScoreSpan.innerText = '0' // onClick makes your score go back to 0
    computerScoreSpan.innerText = '0' // onClick makes computer score go back to 0
    let toDelete = document.querySelectorAll('div.result-selection')
    console.log(toDelete)
    for (let i = 0; i < toDelete.length; i++) {
        toDelete[i].remove(); // remove the visual choice made
}}