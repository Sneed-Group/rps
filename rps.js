// Function to play rock paper scissors
function playRPS() {
  // Generate two random numbers between 1 and 3 (inclusive)
  const player1 = Math.floor(Math.random() * 3) + 1;
  const player2 = Math.floor(Math.random() * 3) + 1;

  // Determine the choices based on the closest distance
  let player1Choice, player2Choice;
  if (Math.abs(player1 - 1) < Math.abs(player1 - 2) && Math.abs(player1 - 1) < Math.abs(player1 - 3)) {
    player1Choice = "Rock";
  } else if (Math.abs(player1 - 2) < Math.abs(player1 - 1) && Math.abs(player1 - 2) < Math.abs(player1 - 3)) {
    player1Choice = "Paper";
  } else {
    player1Choice = "Scissors";
  }

  player2Choice = prompt("Rock, Paper, or Scissors?")

  // Determine the winner based on game logic
  let winner;
  if (player1Choice === player2Choice) {
    winner = "Tie";
  } else if (player1Choice === "Rock") {
    winner = player2Choice === "Scissors" ? "Bot" : "Player";
  } else if (player1Choice === "Paper") {
    winner = player2Choice === "Rock" ? "Bot" : "Player";
  } else { // player1Choice === "Scissors"
    winner = player2Choice === "Paper" ? "Bot" : "Player";
  }

  // Print the results
  alert(`Bot: ${player1Choice}
  Player: ${player2Choice}
  Winner: ${winner}`);
}

// Play the game twice (once per player)
playRPS();
