import React from "react";
import RandomList from "./RandomList";

class Counter extends React.Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count:this.state.count - 1});
  }

  getRandomInt = () => {
    return Math.floor(Math.random() * Math.floor(10));
  }

  handleRandom = () => {
    this.setState({count:this.state.count + this.getRandomInt()})
  }

  render() {
    return (
      <div>
        <div className="card text-center">
          <div className="card-header bg-primary text-white">
            <h3 className="card-title">Click Counter!</h3>
          </div>
          <div className="card-body">
            <p className="card-text">
              Click Count: {this.state.count}
            </p>
            <button className="btn btn-success" onClick={this.handleIncrement}>
              Increment
            </button>
            <br/>
            <br/>
            <button className="btn btn-danger" onClick={this.handleDecrement}>
              Decrement
            </button>
            <br/>
            <br/>
            <button className="btn btn-warning" onClick={this.handleRandom}> 
              Random
            </button>

            
            </div>
          </div>
            <RandomList />
        </div>
    );
  }
}

export default Counter;
