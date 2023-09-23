const xClass = "x";
const circleClass = "circle";
const fieldElements = document.querySelectorAll('[data-field]');
const board = document.getElementById('board');
let circleTurn


/* A function in which each field executes a "handleClick" function when clicked 
funkcja, która nasłuchuje klikniecia na pole - wykonuje funkcje "handleClick" i moze byc uzyta raz na pole
*/
fieldElements.forEach(field => {
    field.addEventListener('click', handleClick, { once: true})
})

function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? circleClass : xClass
    // Place mark
    placeMark(cell, currentClass)
    // Check for win
    // Check for draw
    // Switch turns
    switchTurns()
    setBoardHoverClass()
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

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