// Project Overview:
// For this project I am building a simple Memory Card Game using HTML and JavaScript. 
// The goal is to flip two cards at a time and try to find all the matching pairs. 
// I will create an array of card values, shuffle them, and display them on the page as clickable cards. 
// When the player clicks two cards, I will check if they match and either keep them flipped or flip them back. 
// I will also track the number of moves and use a timer to show how long the game takes. 
// My JavaScript will include functions for setting up the game, handling clicks, checking matches,
// updating the moves, and restarting the game.


// Select main elements from the page
const gameBoard = document.getElementById("game-board");
const movesDisplay = document.getElementById("moves");
const timerDisplay = document.getElementById("timer");
const newGameButton = document.getElementById("new-game");
// Game state variables
let cards = [];        // array of card values
let firstCard = null;  // first flipped card
let secondCard = null; // second flipped card
let isBoardLocked = false;
let moves = 0;
let matchesFound = 0;
// Timer variables
let startTime = null;
let timerId = null;    
// Start or restart the game
function setupGame() {
    console.log("Game is starting...");
}
// Base card values (each value appears twice to make a pair)
const baseCardValues = ["A", "A", "B", "B", "C", "C", "D", "D"];
// Shuffle an array by swapping random items
function shuffleArray(array) {
    for (let i = 0; i < array.length; i++) {
        const randomIndex = Math.floor(Math.random() * array.length);

        // swap values using a temporary variable
        const temp = array[i];
        array[i] = array[randomIndex];
        array[randomIndex] = temp;
    }

    return array;
}
// Start or restart the game
function setupGame() {
    // reset game state
    moves = 0;
    matchesFound = 0;
    firstCard = null;
    secondCard = null;
    isBoardLocked = false;

    // copy and shuffle card values
    cards = baseCardValues.slice(); // make a copy
    shuffleArray(cards);

    // update moves on the page
    if (movesDisplay) {
        movesDisplay.textContent = moves;
    }

    console.log("Shuffled cards:", cards);
}
// Start the first game automatically
setupGame();
// Create a single card element for a given value
function createCardElement(cardValue) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.textContent = "?"; // we will change this later when flipped
    card.dataset.value = cardValue; // store the real value on the element
    return card;
}
