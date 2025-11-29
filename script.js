// Project Overview:
// For this project I am building a simple Memory Card Game using HTML and JavaScript.
// The goal is to flip two cards at a time and try to find all the matching pairs.
// I will create an array of card values, shuffle them, and display them on the page as clickable cards.
// When the player clicks two cards, I will check if they match and either keep them flipped or flip them back.
// I will also track the number of moves and use a timer to show how long the game takes.
// My JavaScript will include functions for setting up the game, handling clicks, checking matches,
// updating the moves, and restarting the game.

// Base card values (each value appears twice to make a pair)
const baseCardValues = ["A", "A", "B", "B", "C", "C", "D", "D"];

// Select main elements from the page
const gameBoard = document.getElementById("game-board");
const movesDisplay = document.getElementById("moves");
const timerDisplay = document.getElementById("timer");
const newGameButton = document.getElementById("new-game");

// Game state variables
let cards = [];        // array of card values used in the current game
let firstCard = null;  // first flipped card
let secondCard = null; // second flipped card
let isBoardLocked = false;
let moves = 0;
let matchesFound = 0;

// Timer variables
let startTime = null;  // will hold a Date object
let timerId = null;    // will hold the setInterval id

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

// Create a single card element for a given value
function createCardElement(cardValue) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.textContent = "?"; // we will change this later when flipped
    card.dataset.value = cardValue; // store the real value on the element

    // when the card is clicked, handle the click
    card.addEventListener("click", function () {
        handleCardClick(card);
    });

    return card;
}

// Update the moves display on the page
function updateMovesDisplay() {
    if (movesDisplay) {
        movesDisplay.textContent = moves;
    }
}

// Check if the two selected cards match
function checkForMatch() {
    if (!firstCard || !secondCard) {
        return;
    }

    const firstValue = firstCard.dataset.value;
    const secondValue = secondCard.dataset.value;

    if (firstValue === secondValue) {
        console.log("It's a match!");

        // Increase matches found
        matchesFound = matchesFound + 1;

        // Reset choices
        firstCard = null;
        secondCard = null;

    } else {
        console.log("Not a match!");

        // Lock the board so the user can't click
        isBoardLocked = true;

        // Wait 1 second before flipping cards back
        setTimeout(function () {
            firstCard.textContent = "?";
            firstCard.classList.remove("flipped");

            secondCard.textContent = "?";
            secondCard.classList.remove("flipped");

            // Reset card choices
            firstCard = null;
            secondCard = null;

            // Unlock the board
            isBoardLocked = false;
        }, 1000);
    }
}

// Handle when a card is clicked
function handleCardClick(card) {
    // if the board is locked, ignore clicks
    if (isBoardLocked) {
        return;
    }

    // if this card is already flipped, do nothing
    if (card.classList.contains("flipped")) {
        return;
    }

    // flip the card: show its value and add the "flipped" class
    card.textContent = card.dataset.value;
    card.classList.add("flipped");

    // if this is the first card chosen, store it and stop here
    if (firstCard === null) {
        firstCard = card;
        return;
    }

    // if we already had a first card, this must be the second
    secondCard = card;

    // increase moves because we just completed a pair selection
    moves = moves + 1;
    updateMovesDisplay();

    // Now check if they match
    checkForMatch();
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
    cards = baseCardValues.slice(); // make a copy of the base values
    shuffleArray(cards);            // shuffle them

    // update moves on the page
    updateMovesDisplay();

    // clear the board and add cards
    if (gameBoard) {
        gameBoard.innerHTML = "";

        for (let i = 0; i < cards.length; i++) {
            const cardElement = createCardElement(cards[i]);
            gameBoard.appendChild(cardElement);
        }
    }

    console.log("Shuffled cards:", cards);
}

// Start the first game automatically
setupGame();



