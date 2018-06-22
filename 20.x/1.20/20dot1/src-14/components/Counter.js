import React from "react";
import PanelBody from "./PanelBody";

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
  // Setting the initial state of the Counter component
  constructor(props){
    super(props);

    this.state = {
      count: 0
    }
  }

  // handleIncrement increments this.state.count by 1
  handleIncrement = (val) => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + val });
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Click Counter!</div>
        <PanelBody
          count={this.state.count}
          handleIncrement={this.handleIncrement}
          incrementStep={10}
        />
      </div>
    );
  }
}

export default Counter;
