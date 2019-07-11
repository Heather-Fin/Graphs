import React from "react";
import './App.css';
import Radar from './components/Radar';
import Button from './components/Button';

function App() {

  return (
    <div>
      <div className='hero'>
        <h1>Project Divergent</h1>
        <p className='hero-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className='radar'><Radar></Radar></div>
      <Button></Button>
    </div>
  );
}

export default App;
