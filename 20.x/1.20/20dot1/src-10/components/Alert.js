import React from "react";

const Alert = props => {
  console.log(props);
  if (props.nonsense) {
    // array
    // console.log(props.nonsense[0])

    // obj
    // console.log(props.nonsense.obj)

    // func
    props.nonsense()
  }

  return (
    <div className={`alert alert-${props.type || "success"}`} role="alert">
      {props.children}
    </div>
  );
};

export default Alert;
