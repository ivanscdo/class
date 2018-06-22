import React, {Component} from "react";

export default class RandomList extends Component{
    state = {
        list: ["some", "random", "strings"]
    }

    addString = () => {
        let rand = Math.random().toString()

        this.setState({
            list: [...this.state.list, rand]
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.list.map( (item, index) => <li key={index}>{item}</li>)}
                </ul>
                <button onClick={this.addString}>Add New Random String
                </button>
            </div>
        )
    }
}