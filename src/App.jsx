import { useState } from "react";
import "./App.css";

function App() {
  // Initialize state with a random number between 1 and 99
  const getRandomNumber = () => Math.floor(Math.random() * 99) + 1;
  const [number, setNumber] = useState(getRandomNumber());

  // Function to increase the number
  const increaseNumber = () => {
    setNumber((prevNumber) => (prevNumber < 99 ? prevNumber + 1 : prevNumber));
  };

  // Function to decrease the number
  const decreaseNumber = () => {
    setNumber((prevNumber) => (prevNumber > 1 ? prevNumber - 1 : prevNumber));
  };

  // Function to reroll the number
  const rerollNumber = () => {
    setNumber(getRandomNumber());
  };

  return (
    <div className="App">
      <h1 className="number-display">{number}</h1>
      <div className="btn-actions">
        <button className="btn" onClick={decreaseNumber}>
          -
        </button>
        <button className="btn" onClick={increaseNumber}>
          +
        </button>
        <button className="btn" onClick={rerollNumber}>
          Reroll
        </button>
      </div>
    </div>
  );
}

export default App;
