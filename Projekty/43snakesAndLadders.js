const ladders = {
  2: 38,
  7: 14,
  8: 31,
  15: 26,
  16: 6,
  21: 42,
  28: 84,
  36: 44,
  46: 25,
  49: 11,
  51: 67,
  62: 19,
  64: 60,
  71: 91,
  74: 53,
  78: 98,
  87: 94,
  89: 68,
  92: 88,
  95: 75,
  99: 80,
};

class SnakesLadders {
  player1 = 0;
  player2 = 0;
  firstPlayer = true; // if true, then 1st player should move next
  isGameOver = false;

  play(die1, die2) {
    if (this.isGameOver) {
      return "Game over!";
    }
    if (this.firstPlayer === true) {
      this.player1 += die1 + die2;
      if (this.player1 > 100) {
        this.player1 = 100 - (this.player1 - 100);
      }
      if (ladders[this.player1]) {
        this.player1 = ladders[this.player1];
      }
    } else if (this.firstPlayer === false) {
      this.player2 += die1 + die2;
      if (this.player2 > 100) {
        this.player2 = 100 - (this.player2 - 100);
      }
      if (ladders[this.player2]) {
        this.player2 = ladders[this.player2];
      }
    }
    if (this.player1 === 100) {
      this.isGameOver = true;
      return "Player 1 Wins!";
    } else if (this.player2 === 100) {
      this.isGameOver = true;
      return "Player 2 Wins!";
    }

    const lastPlayerMove = this.firstPlayer;
    if (die1 != die2) {
      this.firstPlayer = !this.firstPlayer;
    }

    if (lastPlayerMove === true) {
      return "Player 1 is on square " + this.player1;
    } else {
      return "Player 2 is on square " + this.player2;
    }
  }
}
