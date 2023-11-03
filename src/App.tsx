import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Greenlash Games is on the way!
        </p>
        <a
          className="App-link"
          href="http://tlousher.itch.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Itch.io
        </a>
      </header>
    </div>
  );
}

export default App;
