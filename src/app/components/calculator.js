'use client';

import React, { useState } from 'react';
import styles from '../styles/Calculator.module.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleEqual = () => {
    try {
      const result = eval(input);
      setHistory([...history, `${input} = ${result}`]);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className={styles.calculator}>
      <div className={styles.display}>{input}</div>
      <div className={styles.buttons}>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={handleClear} className={styles.double}>C</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={handleEqual}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
      </div>
      <div className={styles.history}>
        <h2>History</h2>
        <ul>
          {history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Calculator;
