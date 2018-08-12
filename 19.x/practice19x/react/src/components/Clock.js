import React, { Component } from 'react';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    // lifestyle hook - runs after component output rendered to DOM for the first time; mounting; page is loaded to screen
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    // lifestyle hook - whenever DOM produced by Clock is removed; unmounting; screen is switched to something else, another page, app, etc
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }


  render() {
    return (
      <div className="clock">
        {/* { this.props.children } */}
        <h1> Hello, World!</h1>
        {/* <h2> It is {this.props.date.toLocaleTimeString()}. </h2> */}
        <h2> It is {this.state.date.toLocaleTimeString()}. </h2>

      </div>
    )
  }
}
