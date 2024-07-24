import React from 'react';
import PomodoroTimer from './components/PomodoroTimer';
import './App.css'; // Add CSS for styling

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="left-section">
        
        </div>
        <div className="right-section">
         
          <PomodoroTimer />
        </div>
      </header>
    </div>
  );
}

export default App;
