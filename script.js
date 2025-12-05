// ------------------------------------
// REAL GAME CODE STARTS BELOW
// ------------------------------------

// Project Overview:
// For this project I am building a simple Memory Card Game using HTML and JavaScript.
// The goal is to flip two cards at a time and try to find all the matching pairs.
// I will create an array of card values, shuffle them, and display them on the page as clickable cards.
// When the player clicks two cards, I will check if they match and either keep them flipped or flip them back.
// I will also track the number of moves and use a timer to show how long the game takes.
// My JavaScript will include functions for setting up the game, handling clicks, checking matches,
// updating the moves, and restarting the game.



// ------------------------------------
// Simple string practice for this project
// ------------------------------------
const playerName = "Chi Chi";
const playerNameLength = playerName.length;
const firstLetterOfName = playerName[0];

console.log("Player name:", playerName);
console.log("Name length:", playerNameLength);
console.log("First letter of name:", firstLetterOfName);


// ------------------------------------
// Simple array practice for this project
// ------------------------------------
let numberList = [1, 2, 3];

let nestedGrid = [
    ["A", "B"],
    ["C", "D"]
];

// index into arrays
const firstNumber = numberList[0];
const topLeft = nestedGrid[0][0];

// update array value by index
numberList[1] = 99;

// array methods: push/pop/shift/unshift
numberList.push(4);
numberList.pop();
numberList.unshift(0);
numberList.shift();

console.log("First number:", firstNumber);
console.log("Top-left nested value:", topLeft);
console.log("Final numberList:", numberList);


// ------------------------------------
// REAL GAME CODE STARTS BELOW
// ------------------------------------

// Base card values (each pair appears twice)
const baseCardValues = ["A", "A", "B", "B", "C", "C", "D", "D"];

// Select main elements from the page
const gameBoard = document.getElementById("game-board");
const movesDisplay = document.getElementById("moves");
const timerDisplay = document.getElementById("timer");
const newGameButton = document.getElementById("new-game");

// ------------------------------------
// GAME STATE VARIABLES
// ------------------------------------

// Game state variables
let cards = [];        // array of card values used in the current game
let firstCard = null;  // first flipped card
let secondCard = null; // second flipped card
let isBoardLocked = false;
let moves = 0;
let matchesFound = 0;
let isGameOver = false;

// Timer variables
let startTime = null;  // will hold a Date object
let timerId = null;    // will hold the setInterval id

// ------------------------------------
// SHUFFLE AND CARD CREATION
// ------------------------------------

// Shuffle an array by swapping random items
function shuffleArray(array) {
    // loop through each item in the array
    for (let i = 0; i < array.length; i++) {
        // pick a random index from 0 to array.length - 1
        const randomIndex = Math.floor(Math.random() * array.length);

        // swap the current item with the random one
        const temp = array[i];
        array[i] = array[randomIndex];
        array[randomIndex] = temp;
    }

    // return the shuffled array
    return array;
}

// ------------------------------------
// CREATE CARD ELEMENT
// ------------------------------------

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

// ------------------------------------
// TIMER FUNCTIONS
// ------------------------------------

// Update the timer display on the page
function updateTimerDisplay(seconds) {
    if (timerDisplay) {
        timerDisplay.textContent = seconds;
    }
}

// Start the game timer
function startTimer() {
    // create a Date object starting at time 0
    startTime = new Date(0);

    // set it to the current time
    startTime.setTime(Date.now());

    // clear any old timer that may be running
    if (timerId !== null) {
        clearInterval(timerId);
    }

    // update the timer every second
    timerId = setInterval(function () {
        const now = new Date();
        const difference = now - startTime; // difference in milliseconds
        const seconds = Math.floor(difference / 1000);

        // show the number of seconds passed on the page
        updateTimerDisplay(seconds);
    }, 1000);
}

// Stop the game timer
function stopTimer() {
    // if a timer is running, stop it
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;  // reset timerId so we know no timer is active
    }
}

// ------------------------------------
// CARD CLICK HANDLER
// ------------------------------------

// Handle when a card is clicked
function handleCardClick(card) {
    // if the game is already over, ignore clicks
    if (isGameOver) {
        return;
    }

    // if the board is locked, ignore clicks while cards are flipping back
    if (isBoardLocked) {
        return;
    }

    // if this card is already flipped face up, do nothing
    if (card.classList.contains("flipped")) {
        return;
    }

    // flip the card: show its value and add the "flipped" class
    card.textContent = card.dataset.value;
    card.classList.add("flipped");

    // if this is the first card chosen, remember it and stop here
    if (firstCard === null) {
        firstCard = card;
        return;
    }

    // otherwise, this must be the second card
    secondCard = card;

    // we completed one move (two cards chosen)
    moves = moves + 1;
    updateMovesDisplay();

    // now check if the two chosen cards match
    checkForMatch();
}
// ------------------------------------
// MATCH CHECKING LOGIC
// ------------------------------------

// Check if the two selected cards match
function checkForMatch() {
    // if either card is missing, do nothing
    if (!firstCard || !secondCard) {
        return;
    }

    const firstValue = firstCard.dataset.value;
    const secondValue = secondCard.dataset.value;

    // if the values are the same, it's a match
    if (firstValue === secondValue) {
        console.log("It's a match!");

        // keep track of how many matches we found
        matchesFound = matchesFound + 1;

        // clear the selected cards
        firstCard = null;
        secondCard = null;

        // check if the player has found all pairs
        const totalPairs = baseCardValues.length / 2;
        if (matchesFound === totalPairs) {
            console.log("You found all the matches!");
            stopTimer();
            isGameOver = true;
            alert("You found all the matches!");
        }

    } else {
        console.log("Not a match!");

        // lock the board while we flip the cards back
        isBoardLocked = true;

        // wait a second, then hide both cards again
        setTimeout(function () {
            firstCard.textContent = "?";
            firstCard.classList.remove("flipped");

            secondCard.textContent = "?";
            secondCard.classList.remove("flipped");

            // clear the selected cards
            firstCard = null;
            secondCard = null;

            // unlock the board
            isBoardLocked = false;
        }, 1000);
    }
}

// ------------------------------------
// GAME SETUP AND RESET
// ------------------------------------

// Start or restart the game
function setupGame() {
    //* reset game state
    moves = 0;
    matchesFound = 0;
    firstCard = null;
    secondCard = null;
    isBoardLocked = false;
    isGameOver = false;

    // reset and start timer
    stopTimer();
    updateTimerDisplay(0);
    startTimer();

    // copy and shuffle card values
    cards = baseCardValues.slice();
    shuffleArray(cards);

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

// Restart the game when the New Game button is clicked
if (newGameButton) {
    newGameButton.addEventListener("click", function () {
        setupGame();
    });
}

// Start the first game automatically
setupGame();







