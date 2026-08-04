/**
 * Game Handler: Molo Memory Match (Audio Enhanced Edition)
 * Handles logic, sequence matching, timer mechanics, and extended sound design.
 */

const BAYBAYIN_LETTERS = ['A', 'B', 'C', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'];

const ROUND_SETTINGS = {
  1: { name: 'Alaala', title: 'Round I · Alaala', speedSec: 15, seqLen: 2 },
  2: { name: 'Pagsikad', title: 'Round II · Pagsikad', speedSec: 12, seqLen: 3 },
  3: { name: 'Bagon', title: 'Round III · Bagon', speedSec: 9, seqLen: 4 },
  4: { name: 'Kasanagan', title: 'Round IV · Kasanagan', speedSec: 7, seqLen: 5 },
  5: { name: 'Wakas', title: 'Round V · Wakas', speedSec: 5, seqLen: 5 }
};

let currentRound = 1;
let streak = 0;
let currentSequence = [];
let playerIndex = 0;
let timerInterval = null;
let timeLeft = 0;
let isAcceptingInput = false;
let isMuted = false;

// DOM Cache
let gridEl, timerValEl, roundValEl, streakValEl, roundTitleEl, seqBoxEl, btnStart, btnAudioToggle;
let modalOverlay, modalHeadline, modalSubtext, modalBtn;
let sndBgm, sndSelect, sndCorrect, sndWrong, sndShuffle, sndTick, sndWin, sndFail;

document.addEventListener('DOMContentLoaded', () => {
  // Bind DOM Elements
  gridEl = document.getElementById('card-grid');
  timerValEl = document.getElementById('timer-val');
  roundValEl = document.getElementById('round-val');
  streakValEl = document.getElementById('streak-val');
  roundTitleEl = document.getElementById('round-title');
  seqBoxEl = document.getElementById('seq-box');
  btnStart = document.getElementById('btn-start');
  btnAudioToggle = document.getElementById('btn-audio-toggle');
  
  modalOverlay = document.getElementById('modal-overlay');
  modalHeadline = document.getElementById('modal-headline');
  modalSubtext = document.getElementById('modal-subtext');
  modalBtn = document.getElementById('modal-btn');

  // Audio Elements
  sndBgm = document.getElementById('snd-bgm');
  sndSelect = document.getElementById('snd-select');
  sndCorrect = document.getElementById('snd-correct');
  sndWrong = document.getElementById('snd-wrong');
  sndShuffle = document.getElementById('snd-shuffle');
  sndTick = document.getElementById('snd-tick');
  sndWin = document.getElementById('snd-win');
  sndFail = document.getElementById('snd-fail');

  // 
  if (sndBgm) sndBgm.volume = 0.70; // dont cahnge this 

  // Music Events kadto lang di
  if (btnAudioToggle) btnAudioToggle.addEventListener('click', toggleAudio);

  // Start Game Button
  if (btnStart) {
    btnStart.addEventListener('click', () => {
      btnStart.style.display = 'none';
      startBgm();
      startRound(1);
    });
  }

  setupBoard();
});

function playSound(audioEl) {
  if (!audioEl || isMuted) return;
  audioEl.currentTime = 0;
  audioEl.play().catch(() => {});
}

function startBgm() {
  if (!sndBgm || isMuted) return;
  sndBgm.play().catch(() => {});
}

function toggleAudio() {
  isMuted = !isMuted;
  if (isMuted) {
    if (sndBgm) sndBgm.pause();
    btnAudioToggle.innerText = '🔇 Music: OFF';
  } else {
    if (sndBgm) sndBgm.play().catch(() => {});
    btnAudioToggle.innerText = '🔊 Music: ON';
  }
}

function setupBoard() {
  gridEl.innerHTML = '';
  BAYBAYIN_LETTERS.forEach((letter, index) => {
    const cardNode = document.createElement('div');
    cardNode.className = 'card';
    cardNode.dataset.letter = letter;
    cardNode.dataset.index = index;

    // Wow you made this johan? tsym love you
    cardNode.innerHTML = `
      <div class="card-face card-back" style="background-image: url('assets/Molo-Memory-Match/Memory%20Cards/card-back.png');"></div>
      <div class="card-face card-front" style="background-image: url('assets/Molo-Memory-Match/Memory%20Cards/${letter}.png');"></div>
    `;

    cardNode.addEventListener('click', () => handleCardClick(cardNode));
    gridEl.appendChild(cardNode);
  });
}

// YUNG FREAKING SHUFFLE SFX TOOK ME LIKE 3X ATTEMPTS TO GET RIGHT. I HATE AUDIO SYNCING IN JS.
function animateShuffle(callback) {
  playSound(sndShuffle); 

  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    const sx = (Math.random() - 0.5) * 200 + 'px';
    const sy = (Math.random() - 0.5) * 200 + 'px';
    const sr = (Math.random() - 0.5) * 45 + 'deg';
    
    card.style.setProperty('--sx', sx);
    card.style.setProperty('--sy', sy);
    card.style.setProperty('--sr', sr);
    card.classList.add('shuffling');
  });

  setTimeout(() => {
    cards.forEach(c => c.classList.remove('shuffling'));
    if (callback) callback();
  }, 650);
}

function startRound(roundNum) {
  currentRound = roundNum;
  const config = ROUND_SETTINGS[currentRound];

  roundTitleEl.innerHTML = config.title;
  roundValEl.innerText = `${currentRound}`;
  streakValEl.innerText = `×${streak}`;
  timeLeft = config.speedSec;
  timerValEl.innerText = timeLeft < 10 ? `0${timeLeft}` : timeLeft;

  isAcceptingInput = false;
  playerIndex = 0;

  document.querySelectorAll('.card').forEach(c => c.classList.remove('flipped'));

  animateShuffle(() => {
    generateSequence(config.seqLen);
    previewSequence();
  });
}

function generateSequence(length) {
  currentSequence = [];
  const shuffledIndices = [...Array(BAYBAYIN_LETTERS.length).keys()].sort(() => Math.random() - 0.5);
  for (let i = 0; i < length; i++) {
    currentSequence.push(shuffledIndices[i]);
  }

  seqBoxEl.innerHTML = '';
  currentSequence.forEach(() => {
    const slot = document.createElement('span');
    slot.innerText = '?';
    seqBoxEl.appendChild(slot);
  });
}

function previewSequence() {
  let step = 0;
  const cards = document.querySelectorAll('.card');

  const flashInterval = setInterval(() => {
    if (step > 0) {
      const prevIdx = currentSequence[step - 1];
      cards[prevIdx].classList.remove('flipped');
    }

    if (step < currentSequence.length) {
      const targetIdx = currentSequence[step];
      cards[targetIdx].classList.add('flipped');
      playSound(sndSelect);
      step++;
    } else {
      clearInterval(flashInterval);
      setTimeout(() => {
        startTimerCountdown();
      }, 400);
    }
  }, 750);
}

function startTimerCountdown() {
  isAcceptingInput = true;
  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    timeLeft--;
    timerValEl.innerText = timeLeft < 10 ? `0${timeLeft}` : timeLeft;

    if (timeLeft > 0) {
      playSound(sndTick);
    }

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      handleRoundFailure("Time's up!");
    }
  }, 1000);
}

function handleCardClick(cardNode) {
  if (!isAcceptingInput) return;

  const cardIdx = parseInt(cardNode.dataset.index);
  const expectedIdx = currentSequence[playerIndex];

  playSound(sndSelect);
  cardNode.classList.add('flipped');

  if (cardIdx === expectedIdx) {
    const seqSlots = seqBoxEl.querySelectorAll('span');
    if (seqSlots[playerIndex]) {
      seqSlots[playerIndex].innerText = cardNode.dataset.letter;
    }

    playerIndex++;

    if (playerIndex >= currentSequence.length) {
      clearInterval(timerInterval);
      isAcceptingInput = false;
      streak++;
      streakValEl.innerText = `×${streak}`;
      
      playSound(sndCorrect);
      setTimeout(() => playSound(sndWin), 300);

      setTimeout(() => {
        showCompletionModal(true);
      }, 700);
    }
  } else {
    clearInterval(timerInterval);
    isAcceptingInput = false;
    playSound(sndWrong);
    setTimeout(() => playSound(sndFail), 250);
    handleRoundFailure("Incorrect sequence!");
  }
}

function handleRoundFailure(reason) {
  streak = 0;
  streakValEl.innerText = `×${streak}`;
  setTimeout(() => {
    showCompletionModal(false, reason);
  }, 700);
}

function showCompletionModal(isSuccess, failureReason = '') {
  modalOverlay.classList.add('active');

  if (isSuccess) {
    if (currentRound >= 5) {
      modalHeadline.innerHTML = "Mabuhay! <em>Game Mastered!</em>";
      modalSubtext.innerText = "You have completed all 5 rounds of Baybayin Recall!";
      modalBtn.innerText = "Play Again";
      modalBtn.onclick = () => {
        modalOverlay.classList.remove('active');
        startRound(1);
      };
    } else {
      modalHeadline.innerHTML = "Kumusta na, <em>tara sunod!</em>";
      modalSubtext.innerText = `Round ${currentRound} Complete! Ready for Round ${currentRound + 1}?`;
      modalBtn.innerText = `Continue → Round ${currentRound + 1}`;
      modalBtn.onclick = () => {
        modalOverlay.classList.remove('active');
        startRound(currentRound + 1);
      };
    }
  } else {
    modalHeadline.innerHTML = "Sayang! <em>Try Again</em>";
    modalSubtext.innerText = `${failureReason} Sequence lost on Round ${currentRound}.`;
    modalBtn.innerText = "Retry Round";
    modalBtn.onclick = () => {
      modalOverlay.classList.remove('active');
      startRound(currentRound);
    };
  }
}