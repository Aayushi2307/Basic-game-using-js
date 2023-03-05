'use strict';
let score0Element = document.querySelector('#score--0');
let score1Element = document.getElementById('score--1');
let currentScore0Element = document.getElementById('current--0');
let currentScore1Element = document.getElementById('current--1');

let newGame = document.querySelector('.btn--new');
let rollDice = document.querySelector('.btn--roll');
let holdDice = document.querySelector('.btn--hold');

let diceImg = document.querySelector('.dice');

let player0Element = document.querySelector('.player--0');
let player1Element = document.querySelector('.player--1');
let playing, currentScore, activePlayer, score;

const init = function () {
    score = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0Element.textContent = 0;
    score1Element.textContent = 0;
    currentScore0Element.textContent = 0;
    currentScore1Element.textContent = 0;

    diceImg.classList.add('hidden');
    player0Element.classList.remove('player--winner');
    player1Element.classList.remove('player--winner');
    player0Element.classList.add('player--active');
    player1Element.classList.remove('player--active');
};
init();

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0Element.classList.toggle("player--active");
    player1Element.classList.toggle("player--active");
}

rollDice.addEventListener('click', function () {
    if (playing) {
        let dice = Math.trunc(Math.random() * 6) + 1;
        diceImg.classList.remove('hidden');
        diceImg.src = `dice-${dice}.png`;

        if (dice === 1) {
            switchPlayer();
        }
        else {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            // console.log(playerId.getAttribute('id'));
        }
    }
});

holdDice.addEventListener('click', function () {
    if (playing) {
        score[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
        if (score[activePlayer] >= 10) {
            diceImg.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }
        else {
            switchPlayer();
        }
    }
});
newGame.addEventListener('click', init);