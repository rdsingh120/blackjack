
let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let cardsEl = document.querySelector('#cards-el');
let sumEl = document.querySelector("#sum-el");
let messageEl = document.querySelector("#message-el");
let buttonEl = document.getElementById("button-el");

let player = {
	name: "RDS",
	chips: 500
}

let playerEl = document.getElementById('player-el');
playerEl.textContent = player.name + ": $" + player.chips;

function startGame() {
	let firstCard = getRandomCard();
	let secondCard = getRandomCard();
	cards = [firstCard, secondCard];
	sum = firstCard + secondCard;
	isAlive = true;
	renderGame();
	buttonEl.textContent = "RESET GAME"
}


function getRandomCard() {
	let randNum = Math.floor(Math.random() * 13) + 1;
	if (randNum === 1) {
		return 11;
	} else if (randNum > 10) {
		return 10;
	} else {
		return randNum;
	}
}


function renderGame() {
	cardsEl.textContent = "Cards: "
	for (let i = 0; i < cards.length; i++){
		cardsEl.textContent += cards[i] + ' ';
	}
	sumEl.textContent = "Sum: " + sum;
	if (sum < 21) {
	message = "Do you want to draw a new card?";

} else if (sum === 21) {
	message = "Wohoo! You've got Blackjack!";
	hasBlackjack = true; 
} else {
	message = "You're out of the game!";
	isAlive = false;
}
	messageEl.textContent = message;	
}

function newCard() {
	let card = getRandomCard();
	if (isAlive === true && hasBlackjack === false) {
		sum += card;
		cards.push(card);
		renderGame();
	}
}


