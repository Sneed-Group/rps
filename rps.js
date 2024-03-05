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

  if (Math.abs(player2 - 1) < Math.abs(player2 - 2) && Math.abs(player2 - 1) < Math.abs(player2 - 3)) {
    player2Choice = "Rock";
  } else if (Math.abs(player2 - 2) < Math.abs(player2 - 1) && Math.abs(player2 - 2) < Math.abs(player2 - 3)) {
    player2Choice = "Paper";
  } else {
    player2Choice = "Scissors";
  }

  // Determine the winner based on game logic
  let winner;
  if (player1Choice === player2Choice) {
    winner = "Tie";
  } else if (player1Choice === "Rock") {
    winner = player2Choice === "Scissors" ? "Player 1" : "Player 2";
  } else if (player1Choice === "Paper") {
    winner = player2Choice === "Rock" ? "Player 1" : "Player 2";
  } else { // player1Choice === "Scissors"
    winner = player2Choice === "Paper" ? "Player 1" : "Player 2";
  }

  // Print the results
  console.log(`Player 1: ${player1Choice}`);
  console.log(`Player 2: ${player2Choice}`);
  console.log(`Winner: ${winner}`);
}

// Play the game twice (once per player)
playRPS();
