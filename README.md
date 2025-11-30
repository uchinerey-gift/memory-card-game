# Memory Card Game

This is a simple Memory Card Game built with HTML, CSS, and JavaScript for my Techtonica project.

The goal of the game is to flip two cards at a time and try to find all the matching pairs. The game tracks how many moves I make and how long it takes me to win.

---

## How to Play

1. Click on a card to flip it over.
2. Click a second card to try to find a matching pair.
3. If the two cards match, they stay flipped.
4. If they do not match, they flip back over after a short delay.
5. Keep going until all pairs are found.
6. When all pairs are matched, the game shows a win message and stops the timer.

Use the **New Game** button to shuffle the cards and start over.

---

## How to Run the Game

1. Clone this repository or download the files.
2. Open `index.html` in a web browser.  
   - I used VS Code with the Live Server extension during development.
3. Play the game in the browser window.

---

## Features

- 4x2 grid of cards with hidden values.
- Random shuffle of card values at the start of each game.
- Move counter that increases each time two cards are selected.
- Timer that counts how long the game takes.
- Basic styling to lay out the cards in a grid and show flipped cards.
- “New Game” button to reset the game, moves, and timer.

---

## JavaScript Concepts Practiced

For this project I practiced:

- Storing numbers and strings in variables.
- Using arrays and nested arrays.
- Indexing into arrays and strings.
- Changing array values with index reassignment.
- Using `.push()`, `.pop()`, `.shift()`, and `.unshift()`.
- Generating random numbers with `Math.random()` for shuffling.
- Using `new Date()` and `setTime()` to build a timer.
- Writing functions and passing arguments.
- Understanding `let` and `const` for variables that change or stay the same.
- Using DOM methods like `getElementById`, `createElement`, and `addEventListener`.
- Updating the page with JavaScript to show moves, time, and card states.

---

## Future Improvements

Things I might add later:

- A message on the page instead of an alert when the player wins.
- A best time or best score tracker.
- Difficulty levels with more cards.
- Extra styling and animations for the cards.

---

## Tech Stack

This project uses:

- **HTML** for the page structure
- **CSS** for the basic layout and card styling
- **JavaScript** for all of the game logic, event handling, and timer

---

## What I Learned

While building this Memory Flip Game, I practiced:

- Planning a small game project before writing code.
- Using JavaScript to update the DOM based on user clicks.
- Working with arrays, loops, and random numbers.
- Using `new Date()` and `setInterval()` to build a simple timer.
- Organizing my code with functions and comments.
- Using Git branches, commits, and pull requests to manage my work.

---

## Known Issues

- When the player wins, the browser shows a default message header (for example, `127.0.0.1:5500 says`) above the alert text. This is normal browser behavior when using `alert()` in a local development environment.
- The layout is kept simple on purpose so I could focus on practicing JavaScript and DOM logic for this project.

### Project Credit  
The Memory Flip Game was created by **Chinerey “Chi Chi” Ukwu** during the **Techtonica Session 1 Web Development Course**.

