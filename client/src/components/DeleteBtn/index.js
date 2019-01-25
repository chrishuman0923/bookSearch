import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <button className="btn btn-danger delete-btn" {...props}>
      Delete
    </button>
  );
}

export default DeleteBtn;
