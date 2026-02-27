let currentEnergy = 0;
let timeLeft = 10;
let gameActive = false;
let timerInterval;

// Variables para el Arcade
let playerNumber = 1;
let topScores = []; 
let lastSpaceTime = 0; 

// Elementos del DOM
const barP1 = document.getElementById('bar-p1');
const scoreP1 = document.getElementById('score-p1');
const timerDisplay = document.getElementById('timer-display');
const instructionText = document.getElementById('instruction-text');
const playerNameDisplay = document.getElementById('player-name');
const leaderboardBody = document.getElementById('leaderboard-body');
const leaderboardSection = document.getElementById('leaderboard-section');

window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault(); 
        if (e.repeat) return; 

        const now = new Date().getTime();
        const isDoubleTap = (now - lastSpaceTime) < 400; 
        lastSpaceTime = now;

        if (!gameActive && !Swal.isVisible()) {
            if (isDoubleTap) {
                prepareGame();
            }
            return;
        }

        if (gameActive) {
            currentEnergy = Math.min(currentEnergy + 2, 100);
            updateUI();
        }
    }
});

function prepareGame() {
    leaderboardSection.style.display = 'none';

    currentEnergy = 0;
    timeLeft = 10;
    updateUI();
    gameActive = false; 

    Swal.fire({
        title: `¡TURNO DEL JUGADOR ${playerNumber}!`,
        text: 'Golpea LA BASE lo más rápido que puedas',
        icon: 'warning',
        timer: 1500,
        showConfirmButton: false,
        didOpen: () => { Swal.showLoading(); }
    }).then(() => {
        startGame();
    });
}

function startGame() {
    gameActive = true;
    instructionText.innerText = "¡DALE, DALE, DALE!";
    instructionText.classList.replace('text-warning', 'text-success');
    
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.innerText = timeLeft + "s";
        if (timeLeft <= 0) endGame();
    }, 1000);
}

function updateUI() {
    // 1. Sube el líquido
    barP1.style.height = currentEnergy + '%';
    scoreP1.innerText = currentEnergy + '%';

    // 2. NUEVO: Muestra u oculta la espuma
    const foam = barP1.querySelector('.foam');
    if (currentEnergy > 0) {
        foam.style.opacity = '1';
    } else {
        foam.style.opacity = '0';
    }
}

function endGame() {
    gameActive = false;
    clearInterval(timerInterval);
    instructionText.innerText = "Salta 2 VECES para Iniciar";
    instructionText.classList.replace('text-success', 'text-warning');

    topScores.push({ player: playerNumber, score: currentEnergy });
    topScores.sort((a, b) => b.score - a.score);
    
    if (topScores.length > 5) {
        topScores = topScores.slice(0, 5);
    }
    renderLeaderboard();

    leaderboardSection.style.display = 'block';

    Swal.fire({
        title: '¡Tiempo Terminado!',
        text: `Jugador ${playerNumber} lograste un ${currentEnergy}%`,
        icon: 'success',
        timer: 5000, 
        timerProgressBar: true, 
        showConfirmButton: false, 
        allowOutsideClick: false,
        allowEscapeKey: false
    }).then(() => {
        playerNumber++; 
        playerNameDisplay.innerText = `JUGADOR ${playerNumber}`;
        currentEnergy = 0;
        timeLeft = 10;
        timerDisplay.innerText = "10s";
        updateUI();
    });
}

function renderLeaderboard() {
    leaderboardBody.innerHTML = '';

    topScores.forEach((entry, index) => {
        let rankIcon = (index + 1).toString();
        if (index === 0) rankIcon = '🥇';
        if (index === 1) rankIcon = '🥈';
        if (index === 2) rankIcon = '🥉';

        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="fw-bold">${rankIcon}</td>
            <td>Jugador ${entry.player}</td>
            <td class="fw-bold text-success">${entry.score}%</td>
        `;
        leaderboardBody.appendChild(row);
    });
}