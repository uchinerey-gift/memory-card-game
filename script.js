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
