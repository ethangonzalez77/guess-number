'use strict';

const soundBiteWin = new Audio(
  'sound-board/mixkit-unlock-new-item-game-notification-254.wav'
);
const soundBiteLose = new Audio(
  'sound-board/mixkit-cartoon-quick-splat-2890.wav'
);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const showMessage = function (msg) {
  document.querySelector('.message').textContent = msg;
};
const showHeader = function (msg) {
  document.querySelector('h1').textContent = msg;
};
const showNumberMysteryBox = function (msg) {
  document.querySelector('.number').textContent = msg;
};
const showScore = function (msg) {
  document.querySelector('.score').textContent = msg;
};
const showBodyColor = function (colorName) {
  document.querySelector('body').style.backgroundColor = colorName;
};

//Blinking red light effect
// Create a class attribute:
const att = document.createAttribute('id');

// Set the value of the class attribute:
att.value = 'I';

// Add the class attribute:
const span = document.getElementsByTagName('span')[0];
span.setAttributeNode(att);

//document.querySelector(".number").textContent = secretNumber;// only for testing👈
console.log('The Game has now started....');

document.querySelector('.check').addEventListener('click', function () {
  const userInput = Number(document.querySelector('.guess').value);

  if (!userInput) {
    //no Input
    showMessage('No Numbers were entered🤬');
  } else if (userInput === secretNumber) {
    //Correct
    showHeader('You Win Govna!');
    showMessage('Correct Govna!🚕 🎉');
    showBodyColor('#60b347');
    document.querySelector('.number').style.width = '30rem';
    showNumberMysteryBox(`🏆${secretNumber}🏆`);
    soundBiteWin.play();

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
      document.querySelector('.highscore').style.color = '#FF4500';
    }
  } else if (userInput !== secretNumber) {
    //Wrong

    if (score > 1) {
      showMessage(
        userInput > secretNumber ? 'Too High Govna 📈' : 'Too Low Govna 📉'
      );
      score--;
      showScore(score);
    } else if (score === 1) {
      //last chance
      showBodyColor('#b20a33');
      showHeader('Game Over Govna');
      showNumberMysteryBox('💩');
      score--;
      showScore(score);
      soundBiteLose.play();
    }
  }

  /**
     * Alternative
     *this was replaced:

        else if(userInput > secretNumber) {
        if(score > 1) {

            showMessage("Too High Govna 📈")
            score--;
            document.querySelector(".score").textContent = score;

        }else {
            document.querySelector("body").style.backgroundColor = "#b20a33";
            showHeader("Game Over Govna");
            showNumberMysteryBox("💩");

            soundBiteLose.play();
        }
    }else if(userInput < secretNumber) {
        if(score > 1) {

            showMessage("Too High Govna 📈");
            score--;
            document.querySelector(".score").textContent = score;

        }else {
            document.querySelector("body").style.backgroundColor = "#b20a33";
            showHeader("Game Over Govna");
            showNumberMysteryBox("💩");

            soundBiteLose.play();
        }
    }**/

  console.log(typeof userInput, userInput, Boolean(userInput));
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  console.log('Game resetting....');

  showMessage('Start guessing...');
  showScore(score);
  showBodyColor('#222');
  document.querySelector('.number').style.width = '15rem';
  showNumberMysteryBox('?');
  showHeader('Guess My Number!');
  document.querySelector('.guess').value = '';
});
