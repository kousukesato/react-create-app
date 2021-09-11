import React from 'react'
import logo from './logo.svg';
import './App.css';
import ApiFetch from './componets/ApiFetch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        < ApiFetch />
       
      </header>
    </div>
  );
}

export default App;
