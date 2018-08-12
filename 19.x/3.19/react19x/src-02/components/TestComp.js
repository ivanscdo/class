// import React, { Component } from 'react';

// export default class testComp extends Component {
//   render() {
//     return (
//       <div className="testcomp">
//         test component!
//       </div>
//     )
//   }
// }

import React from "react";

const TestComp = (props) => <h1>{props.test}</h1>;

export default TestComp;