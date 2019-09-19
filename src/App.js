import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      errorMsg: ''
    };
  }
  render() {
  return (
    <div data-test="component-app">
      <h1 
        data-test="counter-display">
        The counter is currently {this.state.counter}
      </h1>
      <h1 
        data-test="error-msg">
        {this.state.errorMsg}

      </h1>
      <button 
        data-test="increment-button"
        onClick={() => {
          this.setState({ counter: this.state.counter + 1 });
          this.setState({ errorMsg: "" })
          }
        }
      >
        Increment
      </button>
      <button 
        data-test="decrement-button"
          onClick={() => {
            if (this.state.counter > 0)
            {
              this.setState({ counter: this.state.counter - 1 })
              this.setState({ errorMsg: "" })
            }
            else
            this.setState({ errorMsg: "The counter cannot go below 0" })
              }
          }
      >
        Decrement
      </button>
    </div>

  );
}
}

export default App;
