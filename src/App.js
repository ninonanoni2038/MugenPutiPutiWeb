import React, { Component } from 'react';
import Sound from 'react-sound'

const App = () => {
  return <Counter />
}



class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    }
  }

  onIncrement = () => {
    this.setState({ value: this.state.value + 1 });

  }

  onDecrement = () => {
    this.setState({ value: this.state.value - 1 });
  }



  render()
  {
    return (
      <button>
        <div className="title">
          <h1>無限ぷちぷち</h1>
        </div>
        <div className="buttons">
          <div className="button-container">
            <button type="button" onClick={this.onIncrement}></button>
          </div>
          <div className="button-container">
            <button type="button" onClick={this.onIncrement}></button>
          </div>
          <div className="button-container">
            <button type="button" onClick={this.onIncrement}></button>
          </div>
          <div className="button-container">
            <button type="button" onClick={this.onIncrement}></button>
          </div>
          <div className="button-container">
            <button type="button" onClick={this.onIncrement}></button>
          </div>
          <div className="button-container">
            <button type="button" onClick={this.onIncrement}></button>
          </div>
          <div className="button-container">
            <button type="button" onClick={this.onIncrement}></button>
          </div>
          <div className="button-container">
            <button type="button" onClick={this.onIncrement}></button>
          </div>
          <div className="button-container">
            <button type="button" onClick={this.onIncrement}></button>
          </div>
        </div>
        <div className="valueState">
          <p>{this.state.value}</p>
        </div>
      </button>


    )
  }
}
export default App;