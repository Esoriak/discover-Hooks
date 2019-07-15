import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Discover Hooks 2019 !
        </p>
      </header>
      <Counter />
    </div>
  );
}

export default App;
