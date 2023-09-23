const xClass = "x";
const circleClass = "circle";
const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const fieldElements = document.querySelectorAll('[data-field]');
const board = document.getElementById('board');

const winningPageTextElement = document.querySelector('winning-page');
let circleTurn


startGame()

function startGame () {
    circleTurn = false;
    
    /* A function in which each field executes a "handleClick" function when clicked 
    funkcja, która nasłuchuje klikniecia na pole - wykonuje funkcje "handleClick" i moze byc uzyta raz na pole
    */
    fieldElements.forEach(field => {
        field.addEventListener('click', handleClick, { once: true})
    })
    setBoardHoverClass()
}


function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? circleClass : xClass
    // Place mark
    placeMark(cell, currentClass)
    // Check for win
    if (checkWin(currentClass)) {
        endGame(false)
    } else if (isDraw()) { // Check for draw
        endGame(true)
    } else 
    switchTurns() 
    setBoardHoverClass()
}


function endGame(draw) {
    if (draw) {

    } else {
        winningPageTextElement.innerHTML = `${circleTurn ? "O" : "X"} Wygrywa!`
    } 
    winningPageTextElement.classList.add('show')
}

function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(xClass) || cell.classList.contains(circleClass)
    })
}
// Place mark
function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

// Switch turns
function switchTurns() {
    circleTurn = !circleTurn
}

function setBoardHoverClass() {
    board.classList.remove(xClass)
    board.classList.remove(circleClass)
    if (circleTurn) {
        board.classList.add(circleClass)
    } else {
        board.classList.add(xClass)
    }
}

function checkWin(currentClass) {
    return winningCombination.some(combination => {
        return combination.every(index => {
            return fieldElements[index].classList.contains(currentClass)
        })
    })
}