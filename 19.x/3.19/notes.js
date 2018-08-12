// react.js
// pure - given same input, will give same outputs

// virtual dom
// construct sits between react and dom (page), updates changes there first, to only change actual dom when neccesary 

// babel
// transpiles code from newer version into something readable by most browsers
// webpack - bundler, babel will run through webpack to compile code

// 18:54
// react quiz anwers
// component js func represents ui element
// jsx - makes it look nicer
// best way to start building - create react app
// babel - transpiler; converst es6 also jsx
// curly braces in jsx - allows js expression inside; anon func to var name
// prev handcuffed by browsers, but now have babel, here to stay
// component prop - state and properties of component

// 25:00
// create react app
// console: 
// cd react
// `create-react-app reacttest`
// cd into dir
// `yarn start` - starts server
// browser, localhost3000, running!
// package.json: react, react-dom, react-scripts, sets up scripts to start, test, eject
// if any tutorial says: run yarn eject, don't do it, takes nice things set up by default
// two directories
// public: images, additional html, etc, index.html is all that matters right now; shell of html page, div id=root, where we will mount app when it starts, sets up react env
// src: (recommend: comment out register service worker inside index.js, recently added, merits in production, but nightmare in dev, decides to not work on localhost, cashed version of page; serves up page quickly even if bad connection), index.css, app.css, app.js (super important); index.js importing stuff, call reactDOM.render - tell it to render app, document.getElementbyID root, div id root in html, imported app as class, but refing as tag, jsx allows us to pass components around without strings, app.js - main component, allows return max of one app from given comp, entire thing wrapped in one div can have children, but cannot have sibling divs, if needed would need another wrapper, cannot have class attribute, need className; import react... 37:00... component - class <something> extends component; render method - returns what what ui to look like, empthy div, but needs it; div inside return (), curly brackets allow to specify js express, img src={logo}

// 43:xx
// npm i -g react-create
// react-create component SubComponent

// 1:02:50
// solution: 02-Stu_HelloReact-Unsolved
// app.js root component, empty no logic, just for subcomponents

// 1:08:xx
// 03-Stu_HelloDiv-Unsolved
// solution: 1:23:43

// 1:25:xx
// making very small components in react, breaking into definable chunks, 
// props - pass atrr from child comp, include as attr on component declaration, put it as attr, then able to get it from props.<whatever name>, can also pass multiple props, add some point add click event, go and edit one little component
{/* <ListItem label = "Peas"/>
<ListItem label = "Carrots"/>
<ListItem label = "Artichokes"/> */}
// whole app react, stick most things into component

// beautify react extension

// 1:48:30
// return from break

// 1:49:00
// css cdn links go in index.html
// react provides UI but no styling

// 1:52:xx
// 05-

// 2:08:00 (!!)
// solution 05-Stu_HelloBootstrap_Unsolved
// reviews alt solution for breaking down components; navbar, header, card in their own component files

// 2:11:00 
// jsx variable component

// 2:26:00
// solution 07-Stu_JSXVariables-Unsolved
// can use any valid js exp, valid in jsx

// 2:28:xx
// including styles in react app
// two main ways of doing it, either way okay as long as don't mix
// 1. classic way with css
// 2. can import single css file per component; having big css files can be problem
// before: seperationg of tech, but not seperation of concernrs, this is back to centralizing concerns
// don't have to import, but can pass styles in js object
// camel case, no hyphens, pass in things as strings
// base css stuff on app.js
// 1 used for react web; 2 for react native since it doesn't have css

// 2:51:xx
// no solution, but final review
// mess around, practice it!
// read through: components and props; focus on props
// before T: review state and lifecycle
// state & lifecycle  - converting fucntion to a class
// es6 imports, import react then import comp
// if googling react tutorials, focus on the fundamentals of react, not a stack that has react in it

// 2:57:xx
// component life cycle
// ton of diffetne hooks, life cycle methods, these are common
// each component has render loop
// <parent/> render loop -> <component/> -> constructor -> render() -> compoentnDidMount
// call super with props super(props), set initial state (this.state = {}), can also use this.getINitialState, much more common... , 
// render
// from constructor it renders, looks at all state vars and gets them; values defined must hae proper checking, if this do this otherwise don't show anything
// check immediately against initial state to see if it can render
// componentDidMount
// happens once it renders, once it made to page, only happens once, other: compomemtnwillunmount, this is where we fetch data
// combined with this.setSate - once data back set state to representate data
// render again
// UI and events, defined in class, func on class that runs every click
// as it re-renders, will render subcomponents,
// state dictates what is happening in component
// react dev toos for chrome ext, time traveling debuggers (eject from create react app)