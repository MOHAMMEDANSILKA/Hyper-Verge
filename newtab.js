// newtab.js

let timer;
let isRunning = false;
let timeLeft = 1500; // 25 minutes in seconds

const pomodoroDisplay = document.getElementById('pomodoro-timer');
const startButton = document.getElementById('start-timer');
const resetButton = document.getElementById('reset-timer');

// Update timer display
function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    pomodoroDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Start the Pomodoro timer
function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timer = setInterval(() => {
        timeLeft--;
        updateDisplay();
        if (timeLeft <= 0) {
            clearInterval(timer);
            isRunning = false;
            alert('Time is up!');
        }
    }, 1000);
}

// Reset the Pomodoro timer
function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 1500;
    updateDisplay();
}

// Event listeners
startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);

// Initial display update
updateDisplay();
