import './App.css';
import React, { useState } from 'react';

function App() {
  const [current, setCurrent] = useState('');
  const [previous, setPrevious] = useState('');
  const [opration, setOpration] = useState('');

  const chooseOpration = (e) => {
    console.log(current);
    console.log(previous);
    console.log(opration);
    if (current === '') return
    if (previous !== '') {
      let value = compute();
      setPrevious(value);
      document.getElementsByClassName("num")[0].value = "";
    }
    if (previous === "") {
      setPrevious(current);
      document.getElementsByClassName("num")[0].value = "";
    }

    setCurrent('');
    setOpration(e.target.innerText);

  }

  const compute = () => {
    let result;
    let currentNumber = parseInt(current);
    let previousNumber = parseInt(previous);
    if (isNaN(previousNumber || isNaN(currentNumber))) return
    if (opration === "+") {
      result = previousNumber + currentNumber;
      return result
    }
    if (opration === "-") {
      result = previousNumber - currentNumber;
      return result
    }
    if (opration === "=") {
      result = currentNumber;
      console.log(result);
      return result

    }

  }
  function equal() {
    let value = compute();
    setPrevious(value);
    setCurrent('');
    setOpration('=');
    document.getElementsByClassName("num")[0].value = "";

  }
  function clearAll() {
    setCurrent('');
    setPrevious('');
    setOpration('');
    document.getElementsByClassName("num")[0].value = "";
  }

  return (
    <React.Fragment >
      {/* page3 calculator */}

      <div className="container">
        <h1>calculator</h1>

        <p>please enter a number then press an opration key</p>
        {/* input num1 */}
        <input className="num" onChange={(e) => setCurrent(e.target.value)} ></input>
        <span className="display" >{previous + opration}</span>

        {/* select opration and get num2 from input and evaluate result*/}
        <button className="btn plus" onClick={chooseOpration}> + </button>

        <button className="btn minus" onClick={chooseOpration}> - </button>

        <button className="btn equal" onClick={equal}> = </button>

        <button className="btn clear" onClick={clearAll}> c </button>

      </div>
    </React.Fragment >
  );
}

export default App;
