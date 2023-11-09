import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './Calculator';

ReactDOM.render(<Calculator />, document.getElementById('root'));

calculator.js
import React, { useState } from 'react';

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);

  const handleNumberClick = (number) => {
    if (currentValue === '0' || currentValue === 'NaN') {
      setCurrentValue(String(number));
    } else {
      setCurrentValue(currentValue + String(number));
    }
  };

  const handleOperatorClick = (op) => {
    if (currentValue !== 'NaN') {
      setPreviousValue(currentValue);
      setOperator(op);
      setCurrentValue('0');
    }
  };

  const handleEqualsClick = () => {
    if (currentValue !== 'NaN' && operator !== null && previousValue !== null) {
      let result;
      switch (operator) {
        case '+':
          result = Number(previousValue) + Number(currentValue);
          break;
        case '-':
          result = Number(previousValue) - Number(currentValue);
          break;
        case '*':
          result = Number(previousValue) * Number(currentValue);
          break;
        case '/':
          result = Number(previousValue) / Number(currentValue);
          break;
        default:
          result = 'NaN';
      }

      setCurrentValue(result.toString());
      setOperator(null);
      setPreviousValue(null);
    }
  };

  const handleClearClick = () => {
    setCurrentValue('0');
    setOperator(null);
    setPreviousValue(null);
  };

  return (
    <div className="calculator-container">
      <div className="display">{currentValue}</div>
      <div className="buttons">
        <button className="number-button" onClick={() => handleNumberClick('7')}>7</button>
        <button className="number-button" onClick={() => handleNumberClick('8')}>8</button>
        <button className="number-button" onClick={() => handleNumberClick('9')}>9</button>

        <button className="operator-button" onClick={() => handleOperatorClick('+')}>+</button>
        <button className="operator-button" onClick={() => handleOperatorClick('-')}>-</button>
        <button className="operator-button" onClick={() => handleOperatorClick('/')}>/</button>
        <button className="operator-button" onClick={() => handleOperatorClick('*')}>\</button>
        <button className="number-button zero-button" onClick={() => handleNumberClick('0')}>0</button>
        <button className="decimal-point-button" onClick={handleDecimalPointClick}>.</button>
        <button className="equals-button" onClick={handleEqualsClick}>=</button>
        <button className="clear-button" onClick={handleClearClick}>AC</button>
      </div>
    </div>
    );
};