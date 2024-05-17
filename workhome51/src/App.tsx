import React, {useState} from "react";
import './App.css';
import LottoBall from "./components/LottoBall";


const initialNumbers = [5, 11, 16, 23, 32];
const generateRandomNumbers = (): number[] => {
  const numbersSet = new Set<number>();
  while (numbersSet.size < 5) {
    const randomNumber = Math.floor(Math.random() * 32) + 5;
    numbersSet.add(randomNumber);
  }
  return Array.from(numbersSet).sort((a, b) => a - b);
};
const App: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>(initialNumbers);

  const handleNewNumbers = () => {
    const newNumbers = generateRandomNumbers();
    setNumbers(newNumbers);
  };

  return (
      <div className="app">
        <h1>Lottery Numbers</h1>
        <button className="button" onClick={handleNewNumbers}>New numbers</button>
        <div className="LottoBall-container">
          {numbers.map((number, index) => (
              <LottoBall key={index} number={number}/>
          ))}
        </div>
      </div>
  )
};

export default App
