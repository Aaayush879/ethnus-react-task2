import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      display: '0',
      currentNumber: '',
      operator: '',
      prevNumber: '',
    };
  }

  handleNumberClick = (number) => {
    const { display, currentNumber, operator, prevNumber } = this.state;

    if (display === '0' || operator === '=') {
      this.setState({
        display: number,
        operator: '',
      });
    } else {
      this.setState({
        display: display + number,
      });
    }
    this.setState({
      currentNumber: currentNumber + number,
    });
  };

  handleOperatorClick = (operator) => {
    const { display, currentNumber, prevNumber } = this.state;
    if (currentNumber === '') {
      this.setState({ operator });
    } else {
      this.setState({
        display: operator,
        prevNumber: display,
        currentNumber: '',
        operator,
      });
    }
  };

  handleEqualsClick = () => {
    const { display, currentNumber, prevNumber, operator } = this.state;
    if (prevNumber !== '' && currentNumber !== '') {
      const result = this.calculate(prevNumber, currentNumber, operator);
      this.setState({
        display: result,
        currentNumber: '',
        prevNumber: result,
        operator: '=',
      });
    }
  };

  calculate = (num1, num2, operator) => {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (operator) {
      case '+':
        return (num1 + num2).toString();
      case '-':
        return (num1 - num2).toString();
      case '*':
        return (num1 * num2).toString();
      case '/':
        if (num2 === 0) {
          return 'Error';
        }
        return (num1 / num2).toString();
      default:
        return num2;
    }
  };

  handleClear = () => {
    this.setState({
      display: '0',
      currentNumber: '',
      operator: '',
      prevNumber: '',
    });
  };

  render() {
    return (
      <div className="calculator">
        <div className="display">{this.state.display}</div>
        <div className="buttons">
          <div className="row">
            <button onClick={() => this.handleNumberClick('7')}>7</button>
            <button onClick={() => this.handleNumberClick('8')}>8</button>
            <button onClick={() => this.handleNumberClick('9')}>9</button>
            <button onClick={() => this.handleOperatorClick('/')}>/</button>
          </div>
          <div className="row">
            <button onClick={() => this.handleNumberClick('4')}>4</button>
            <button onClick={() => this.handleNumberClick('5')}>5</button>
            <button onClick={() => this.handleNumberClick('6')}>6</button>
            <button onClick={() => this.handleOperatorClick('*')}>*</button>
          </div>
          <div className="row">
            <button onClick={() => this.handleNumberClick('1')}>1</button>
            <button onClick={() => this.handleNumberClick('2')}>2</button>
            <button onClick={() => this.handleNumberClick('3')}>3</button>
            <button onClick={() => this.handleOperatorClick('-')}>-</button>
          </div>
          <div className="row">
            <button onClick={() => this.handleNumberClick('0')}>0</button>
            <button onClick={() => this.handleClear()}>C</button>
            <button onClick={() => this.handleEqualsClick()}>=</button>
            <button onClick={() => this.handleOperatorClick('+')}>+</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
