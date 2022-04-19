'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number! ';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

////Developing the app///////////
///// Project Number 1 ///////////
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const setScore = function (message) {
  document.querySelector('.score').textContent = message;
};
const setNumber = function (message) {
  document.querySelector('.number').textContent = message;
};

// Event for the check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // When there is no input
  if (!guess) {
    displayMessage('⛔ No Number ⛔');
    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number! ');

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    setNumber(secretNumber);
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High! ' : '📉 Too Low!');
      score--;
      setScore(score);
    } else {
      highScore = 0;
      document.querySelector('.highscore').textContent = highScore;
      setScore(0);
      displayMessage('💥 You lost the game!');
    }
  }
  // When guess is too high
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈 Too High! ';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       highScore = 0;
  //       document.querySelector('.highscore').textContent = highScore;
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('.message').textContent = '💥 You lost the game!';
  //     }
  //     // When guess is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉 Too Low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       highScore = 0;
  //       document.querySelector('.highscore').textContent = highScore;
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('.message').textContent = '💥 You lost the game!';
  //     }
  //   }
});
// Event for the again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  setScore(score);

  setNumber('?');

  displayMessage('Start guessing...');

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});

///// Project Number 2 ///////////
