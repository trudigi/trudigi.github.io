import React from 'react';
import Poster from './calculator/Poster';
import Video from './calculator/Video';
import Web from './calculator/Web';
import Desktop from './calculator/Desktop';
import Media from './calculator/Media';
import Mobile from './calculator/Mobile';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Trudigi</h1>
        <h3>Trunojoyo Digital Freelancer</h3>

        <Poster/>
        <Video/>
        <Media/>
        <Web/>
        <Desktop/>
        <Mobile/>

      </header>
    </div>
  );
}

export default App;
