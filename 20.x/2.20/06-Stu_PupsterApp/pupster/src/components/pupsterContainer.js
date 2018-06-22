import React, {Component} from "react";
import Navpills from "./Navpills";
import Pupster from "./pages/Pupster";
import About from "./pages/About";
import Discover from "./pages/Discover";
import Search from "./pages/Search";

class Portfolio extends Component {
    state = {
        currentPage: "Pupster"
    };

    render() {
        return (
            <div>
                <Pupster />

            </div>
        )
    }
}

export default Portfolio;