import { useState } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import '../styles/calculator.css';

export function CalculatorPage() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  const handleNumberClick = (num) => {
    if (waitingForNewValue) {
      setDisplay(String(num));
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === '0' ? String(num) : display + num);
    }
  };

  const handleDecimal = () => {
    if (waitingForNewValue) {
      setDisplay('0.');
      setWaitingForNewValue(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const calculate = (prev, current, op) => {
    switch (op) {
      case '+':
        return prev + current;
      case '-':
        return prev - current;
      case '*':
        return prev * current;
      case '/':
        return current !== 0 ? prev / current : 0;
      case '%':
        return prev % current;
      default:
        return current;
    }
  };

  const handleOperation = (op) => {
    const currentValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(currentValue);
    } else if (operation) {
      const result = calculate(previousValue, currentValue, operation);
      setDisplay(String(result));
      setPreviousValue(result);
    }

    setOperation(op);
    setWaitingForNewValue(true);
  };

  const handleEquals = () => {
    if (operation && previousValue !== null) {
      const currentValue = parseFloat(display);
      const result = calculate(previousValue, currentValue, operation);
      setDisplay(String(result));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForNewValue(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
  };

  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  const handleToggleSign = () => {
    const currentValue = parseFloat(display);
    setDisplay(String(currentValue * -1));
  };

  return (
    <main className="shell">
      <Header />
      <section className="calculator-shell">
        <div className="calculator-copy">
          <span className="eyebrow">Utility</span>
          <h1>Deal calculator</h1>
          <p className="hero-text">
            This route now sits inside the same interface system instead of breaking visual
            continuity with the rest of the site.
          </p>
        </div>
        <div className="calculator-container">
          <div className="calculator">
            <div className="display">{display}</div>
            <div className="buttons">
              <button className="btn btn-function" onClick={handleClear} type="button">AC</button>
              <button className="btn btn-function" onClick={handleToggleSign} type="button">+/-</button>
              <button className="btn btn-function" onClick={handleBackspace} type="button">&larr;</button>
              <button className="btn btn-operator" onClick={() => handleOperation('/')} type="button">/</button>

              <button className="btn" onClick={() => handleNumberClick(7)} type="button">7</button>
              <button className="btn" onClick={() => handleNumberClick(8)} type="button">8</button>
              <button className="btn" onClick={() => handleNumberClick(9)} type="button">9</button>
              <button className="btn btn-operator" onClick={() => handleOperation('*')} type="button">*</button>

              <button className="btn" onClick={() => handleNumberClick(4)} type="button">4</button>
              <button className="btn" onClick={() => handleNumberClick(5)} type="button">5</button>
              <button className="btn" onClick={() => handleNumberClick(6)} type="button">6</button>
              <button className="btn btn-operator" onClick={() => handleOperation('-')} type="button">-</button>

              <button className="btn" onClick={() => handleNumberClick(1)} type="button">1</button>
              <button className="btn" onClick={() => handleNumberClick(2)} type="button">2</button>
              <button className="btn" onClick={() => handleNumberClick(3)} type="button">3</button>
              <button className="btn btn-operator" onClick={() => handleOperation('+')} type="button">+</button>

              <button className="btn btn-zero" onClick={() => handleNumberClick(0)} type="button">0</button>
              <button className="btn" onClick={handleDecimal} type="button">.</button>
              <button className="btn btn-equals" onClick={handleEquals} type="button">=</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
