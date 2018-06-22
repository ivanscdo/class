// project overview: thru 31:xx

// 31:30
// react
// building blocks of react app?
// components
// can be expressed as function or class
// func comp - responsible for rendering UI
// peice of raact app responsible for data inside itlse and redering part of UI
// allow to split UI into independent and reusable pieces
// every comp has parent, most have children
// by separating into comps, keeping layout&logic bundled
// name of HTML lke markup?
// jsx
// preprocessor step adds xml syntax to javascrip
// looks like html, but few gotchas, refer to react docs
// ex gotcha: className vs class, camel casing styles, wrapping everything in one element (can only return only tag)
// embed js expressions and values inside of jsx?
// curly braces

// 39:00
// react demo

// 1:00:10
// solution: 11

// 1:19:50
// solution: 12

// 1:41:55
// solution: 13

// 1:56:25
// return from break; 14

// two important aspects, props and state
// props - come from somwhere else
// state - unique to component; inherent to comp, each comp built with class has state
// do not modify state directly
// do not say state.count = 5; this.setSate({count: this.state.count + 1});

// class Counter extends React.Component{
//     constructor(props) {
//         super (props);
//         this.state = {
//             count: 0
//         }
//     }
// }

// have access to props in constructor

// handleIncrement is func

// passing a member of our sate down as prop to child comp, only way child comp know as sate is if passed as prop, state is self contained to indicigual comp, not somthing another comp can access, in order to share from parent to child, need to pass it down as prop

// in order for child comp to do something to parent comp, need to pass method from p to c, otherwise has no hangle on parent's state

// 2:19:35
// solution: 15
// funcational components do not have state; func comp return something simple, does not use state, simple, renders things out, alert bar ex, bootstramp comp kind of comp, 

// might see ex's in google that do not use babel/es6

// 2:25:xx
