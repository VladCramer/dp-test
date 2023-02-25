import logo from './lev.jpg';
import './App.css';
import { useState } from 'react';

function App() {
  const [isPressed, setIsPressed] = useState(false);

  const isPressedToggle = () => setIsPressed(cur => !cur);

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "inline-block" }} onClick={isPressedToggle}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-link" onClick={isPressedToggle}>
          {!isPressed ? 'Slava Ukraine!' : "Heroyam slava!"}
        </p>
      </header>
    </div>
  );
}

export default App;
