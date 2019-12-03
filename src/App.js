import React from 'react';
import Poster from './calculator/Poster';
import Web from './calculator/Web';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Trudigi</h1>
        <h3>Trunojoyo Digital Freelancer</h3>

        <Poster/>
        <Web/>

      </header>
    </div>
  );
}

export default App;
