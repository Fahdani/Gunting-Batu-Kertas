const container = document.querySelector('#container');
const skorAndaElement = document.getElementById('skorAnda');
const skorAdminElement = document.getElementById('skorAdmin');
const choices = ['gunting', 'batu', 'kertas'];
const maxCombinedScore = 5;
let gameInProgress = true;

function createElementWithImage(imageSource, altText) {
  const div = document.createElement('div');
  const img = document.createElement('img');
  img.src = imageSource;
  img.alt = altText;
  div.appendChild(img);
  div.id = altText;
  return div;
}

function updateScores(playerScore, computerScore) {
  if (!gameInProgress) {
    return;
  }
  
  skorAndaElement.textContent = playerScore;
  skorAdminElement.textContent = computerScore;

  const combinedScore = playerScore + computerScore;

  if (combinedScore >= maxCombinedScore) {
    gameInProgress = false;
    if (playerScore > computerScore) {
      showNotification("Selamat, Anda Menang!!!!");
    } else if (playerScore < computerScore) {
      showNotification("Anda Kalah! Coba lagi");
    } else {
      showNotification("Hasil Seri!");
    }
  }
}

function resetScores() {
  skorAndaElement.textContent = "0";
  skorAdminElement.textContent = "0";
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.className = 'notification';
  document.body.appendChild(notification);

  setTimeout(() => {
    document.body.removeChild(notification);
  }, 3000);
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Eh, Seri :)";
  } else if (
    (playerChoice === 'batu' && computerChoice === 'gunting') ||
    (playerChoice === 'gunting' && computerChoice === 'kertas') ||
    (playerChoice === 'kertas' && computerChoice === 'batu')
  ) {
    return `Anda Menang! ${playerChoice} beats ${computerChoice}`;
  } else {
    return `Anda Kalah! ${computerChoice} beats ${playerChoice}`;
  }
}

function makeChoice(choice) {
  if (!gameInProgress) {
    return;
  }
  
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  const result = playRound(choice, computerChoice);
  let playerScore = parseInt(skorAndaElement.textContent);
  let computerScore = parseInt(skorAdminElement.textContent);

  if (result.includes("Anda Menang!")) {
    playerScore++;
  } else if (result.includes("Anda Kalah!")) {
    computerScore++;
  }

  updateScores(playerScore, computerScore);
}

choices.forEach(choice => {
    const element = createElementWithImage(`${choice}.png`, choice);
    element.addEventListener('click', () => makeChoice(choice));
    container.appendChild(element);
});

const playAgainButton = document.getElementById('playAgain');
playAgainButton.addEventListener('click', resetGame);

function resetGame() {
  gameInProgress = true;
  resetScores();
  document.getElementById('results').textContent = ''; 

  container.querySelectorAll('div').forEach(element => {
    element.removeEventListener('click', handleChoice);
    element.addEventListener('click', handleChoice);
    element.style.pointerEvents = 'auto';
  });
}

function handleChoice(event) {
  makeChoice(event.currentTarget.id);
}
