'use strict';
const $ = document.querySelector.bind(document);
let secreNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  $('.message').textContent = message;
};

$('.check').addEventListener('click', function () {
  const guess = Number($('.guess').value);
  if (!guess) {
    displayMessage('☠️ No number!');
  } else if (guess === secreNumber) {
    displayMessage('🎉 Correct Number!');
    $('body').style.backgroundColor = '#60b347';
    $('.number').style.width = '30rem';
    $('.number').textContent = secreNumber;
    if (score > highscore) {
      $('.highscore').textContent = score;
      highscore = score;
    }
  } else if (guess !== secreNumber) {
    if (score > 1) {
      const message = guess > secreNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(message);
      score--;
      $('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      $('.score').textContent = 0;
      $('.number').textContent = secreNumber;
    }
  }
});

$('.again').addEventListener('click', function () {
  secreNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  $('.highscore').value = $('.score').textContent = 20;
  displayMessage('Start guessing...');
  $('body').style.backgroundColor = '#222';
  $('.score').textContent = score;
  $('.number').style.width = '15rem';
  $('.number').textContent = '?';
  $('.guess').value = '';
});
