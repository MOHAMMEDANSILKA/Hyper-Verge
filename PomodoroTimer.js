// src/components/PomodoroTimer.js
import React, { useState, useEffect } from 'react';
import './PomodoroTimer.css'; // Import the CSS file

function PomodoroTimer() {
  const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 0) {
            clearInterval(timer);
            setIsRunning(false);
            alert('Time is up!');
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const startTimer = () => setIsRunning(true);
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(1500);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="pomodoro-container">
      <div className="pomodoro-inner">
        <div className="header">
          <h3 className="title">Pomodoro Timer</h3>
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="13" r="8"></circle>
              <path d="M12 9v4l2 2"></path>
              <path d="M5 3L2 6"></path>
              <path d="m22 6-3-3"></path>
              <path d="M6.38 18.7 4 21"></path>
              <path d="M17.64 18.67 20 21"></path>
            </svg>
          </div>
        </div>
        
        <div className="timer-display">{formatTime(timeLeft)}</div>
        <div className="button-group">
          <button className="start-button" onClick={startTimer} disabled={isRunning}>
            Start
          </button>
          <button className="reset-button" onClick={resetTimer} disabled={!isRunning}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default PomodoroTimer;
