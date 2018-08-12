import React from "react";
import HelloReact from "./components/HelloReact";
import TestComp from "./components/TestComp";

// const App = () => {
//     render() {
//         return() {
//             <div>
//                 <HelloReact />;
//                 <testComp />;
//             </div>
//         };
//     };
// };


// const App = () => <HelloReact />;
const App = () => {
    return(
        <div>
            <HelloReact />
            <TestComp test="red" />
            <TestComp test="wine," />
            <TestComp test="success!" />
        </div>
    );

};



export default App;
