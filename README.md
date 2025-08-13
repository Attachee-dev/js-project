# js-project
Rock Paper Scissors Game

A simple Rock, Paper, Scissors game built using **HTML**, **CSS**, and **JavaScript** where you play against the computer.

## 🎯 Features
- Play against the computer
- 5 rounds per game
- Score tracking for both players
- Randomized computer choice
- Minimal clean UI

## 📂 Files
- `index.html` - Structure of the game
- `style.css` - Styling for the UI
- `script.js` - Game logic
- `README.md` - Documentation

## 🚀 How to Run
1. Clone or download this repository
2. Open `index.html` in your browser
3. Click **Rock**, **Paper**, or **Scissors** to play

---

## 🧠 Pseudocode

```

SET humanScore = 0
SET computerScore = 0
SET roundsPlayed = 0

FUNCTION getComputerChoice:
choices = \["rock", "paper", "scissors"]
RETURN random choice from array

FUNCTION playRound(humanChoice):
human = lowercase(humanChoice)
computer = getComputerChoice()

```
IF human == computer:
    result = tie
ELSE IF human beats computer:
    humanScore++
    result = "You win"
ELSE:
    computerScore++
    result = "You lose"

roundsPlayed++
UPDATE scores on screen
IF roundsPlayed == 5:
    CALL declareWinner
```

FUNCTION declareWinner:
IF humanScore > computerScore:
DISPLAY "You won the game"
ELSE IF computerScore > humanScore:
DISPLAY "Computer won"
ELSE:
DISPLAY "It's a draw"