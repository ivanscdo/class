import React from "react";
import Alert from "./components/Alert";

// original
// const App = () => <Alert type="danger">Invalid user id or password</Alert>;

// two alerts
// one with type, one without
// const App = () => {
//     return (
//         <div>
//             <Alert>Invalid user id or password</Alert>;
//             <Alert type="danger">Invalid user id or password</Alert>;
//         </div>
//     )
// }

// additional prop, nonsense="string"
// const App = () => {
//     return (
//         <div>
//             <Alert>Invalid user id or password</Alert>;
//             <Alert type="danger" nonsense="nothing">Invalid user id or password</Alert>;
//         </div>
//     )
// }

// // additional prop, nonsense="array"
// // const App = () => {
// const App = () => {
//     return (
//         <div>
//             <Alert>Invalid user id or password</Alert>;
//             <Alert type="danger" nonsense={[1,2,3]}>Invalid user id or password</Alert>;
//         </div>
//     )
// }

// additional prop, nonsense="obj"
// const App = () => {
// const App = () => {
//     return (
//         <div>
//             <Alert>Invalid user id or password</Alert>;
//             <Alert type="danger" nonsense={{obj: "red wine, success!"}}>Invalid user id or password</Alert>;
//         </div>
//     )
// }

// additional prop, nonsense="func"
// const App = () => {
const App = () => {
    return (
        <div>
            <Alert>Invalid user id or password</Alert>;
            <Alert type="danger" nonsense={ () => console.log("red wine, success!")}>Invalid user id or password</Alert>;
        </div>
    )
}

export default App;
