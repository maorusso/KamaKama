let player1Score = 0;
let player2Score = 0;
let winningScore = 0;

const submit = document.getElementById("submit");
const scores = document.getElementById("scores");
const winner = document.getElementById("winner");
const input = document.getElementById("input");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const reset = document.getElementById("reset");

scores.textContent = `${player1Score} - ${player2Score}`;

submit.addEventListener("click", () => {
	winningScore = input.value;
	console.log(winningScore);
});

player1.addEventListener("click", () => {
	if (player1Score == winningScore - 1) {
		player1Score++;
		scores.textContent = `${player1Score} - ${player2Score}`;
		winner.textContent = "player1 win!🥇 ";
	} else if (player1Score < winningScore) {
		player1Score++;
		scores.textContent = `${player1Score} - ${player2Score}`;
	}
});

player2.addEventListener("click", () => {
	if (player2Score == winningScore - 1) {
		player2Score++;
		scores.textContent = `${player1Score} - ${player2Score}`;
		winner.textContent = "player2 win!🥇 ";
	} else if (player2Score < winningScore) {
		player2Score++;
		scores.textContent = `${player1Score} - ${player2Score}`;
	}
});

reset.addEventListener("click", () => {
	player1Score = 0;
	player2Score = 0;
	input.value = 0;
	winningScore = 0;
	winner.textContent = "";
	scores.textContent = `${player1Score} - ${player2Score}`;
});
