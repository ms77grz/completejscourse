'use strict'

// BASICS OF DOM

let highscore = 0
let scoreNumber = 20

const setScoreNumber = function (score) {
  document.querySelector('.score').textContent = score
}

setScoreNumber(scoreNumber)

const displayNumber = function (text, width) {
  document.querySelector('.number').textContent = text
  document.querySelector('.number').style.width = width
}

const changeBackground = function (color) {
  document.querySelector('body').style.backgroundColor = color
}

const getRandomNumber = function () {
  return Math.trunc(Math.random() * 20) + 1
}

let secretNumber = getRandomNumber()

const check = document.querySelector('.check')

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message
}

const guessInput = document.querySelector('.guess')

check.addEventListener('click', () => {
  const guessNumber = Number(guessInput.value)

  // WHEN THERE'S NO INPUT
  if (!guessNumber) {
    displayMessage('⛔ No number!')

    // WHEN PLAYER WINS THE GAME
  } else if (guessNumber === secretNumber) {
    displayMessage('🎉 Correct Number!')
    displayNumber(secretNumber, '30rem')
    changeBackground('#60b347')
    // document.querySelector('body').style.backgroundColor = '#60b347'
    scoreNumber > highscore &&
      ((highscore = scoreNumber),
      (document.querySelector('.highscore').textContent = highscore))

    // WHEN GUESS NUMBER IS WRONG
  } else if (guessNumber !== secretNumber) {
    if (scoreNumber > 1) {
      displayMessage(
        guessNumber > secretNumber ? '📈 Too high!' : '📉 Too low!'
      )
      scoreNumber--
      setScoreNumber(scoreNumber)
    } else {
      displayMessage('👎 You lost the game!')
      setScoreNumber(0)
    }
  }
})

const again = document.querySelector('.again')

again.addEventListener('click', () => {
  scoreNumber = 20
  secretNumber = getRandomNumber()
  displayMessage('Start guessing...')
  setScoreNumber(scoreNumber)
  displayNumber('?', '15rem')
  guessInput.value = ''
  changeBackground('#222')

  // location.reload()
})
