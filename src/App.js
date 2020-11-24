import React from 'react';
import Header from "./components/Header.jsx"
import CalculatorBasic from "./components/CalculatorBasic"
import './App.css';

function App() {
const genArr = Array.from({length: 25}, (x, i) => i);

console.log(genArr)
  return (
    <div className="app">
        <div className="red-line"></div>
        <Header />
        <div className="lined-paper-cont" >
          <ul className="lined-paper">
            {genArr.map((el,i) => {
            return <li key={el} className="lines"></li>;
            })}
          </ul>
        </div>
        <CalculatorBasic />
      </div>
  );
}

export default App;
