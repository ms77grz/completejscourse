'use strict'

// SELECTING ELEMENTS
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')

const score0El = document.getElementById('score--0')
const score1El = document.getElementById('score--1')

const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')

const diceEl = document.querySelector('.dice')

const btnNew = document.querySelector('btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

// STARTING CONDITIONS
score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add('hidden')

const scores = [0, 0]
let currentScore = 0
let activePlayer = 0
let playing = true

const switchPlayer = function () {
  // RESET THE CURRENT SCORE
  currentScore = 0
  // SET PREVIOUS PLAYER'S SCORE TO 0
  document.getElementById(`current--${activePlayer}`).textContent = currentScore
  // CHECK THEN CHANGE ACTIVE PLAYER
  // activePlayer === 0 ? activePlayer++ : activePlayer--
  activePlayer = activePlayer === 0 ? 1 : 0
  // SWITCH ACTIVE PLAYER'S WINDOW
  player0El.classList.toggle('player--active')
  player1El.classList.toggle('player--active')
}

// ROLLING DICE FUNCTIONALITY

btnRoll.addEventListener('click', () => {
  if (playing) {
    // 1. GENERATING A RANDOM DICE ROLL
    const dice = Math.trunc(Math.random() * 6) + 1
    // 2. DISPLAY THE DICE
    diceEl.classList.remove('hidden')
    diceEl.src = `dice-${dice}.png`
    // 3. CHECK FOR ROLLED 1
    if (dice !== 1) {
      // ADD DICE TO CURRENT SCORE IF NOT 1
      currentScore += dice
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore
    } else {
      switchPlayer()
    }
  }
})

btnHold.addEventListener('click', () => {
  if (playing && currentScore != 0) {
    // 1. ADD CURRENT SCORE TO ACTIVE PLAYER'S SCORE
    scores[activePlayer] += currentScore
    // DISPLAYING THE TOTAL SCORE
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer]
    // RESETING THE CURRENT SCORE
    // 2. CHECK IF PLAYER'S SCORE IS >= 100
    if (scores[activePlayer] >= 20) {
      // FINISH THE GAME
      diceEl.classList.add('hidden')
      playing = false
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner')
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active')
    } else {
      // 3. SWITCH TO THE NEXT PLAYER
      switchPlayer()
    }
  }
})
