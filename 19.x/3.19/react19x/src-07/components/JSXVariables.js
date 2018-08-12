import React from "react";

const name = "Ivan";
const numInName = 4;
const opinionReact = "is pretty cool!";
const nameWithoutVowels = function() {
  
};

const JSXVariables = () => (
  <div className="main-container">
    <div className="container">
      <div className="jumbotron">
        <h1>Hi! My name is {name}</h1>
        <h2>My name has {numInName} letters</h2>
        <h2>I think React {opinionReact}</h2>
        <h2> {name} without any vowels is: {nameWithoutVowels}</h2>

      </div>
    </div>
  </div>
);

export default JSXVariables;
