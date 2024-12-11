import React from "react";
import "./Button1.css";

const Button1 = ({ name }) => {
  return (
    <button className="custom-button" style={{ "--content": `"${name}"` }}>
      <div className="left"></div>
      {name}
      <div className="right"></div>
    </button>
  );
};

export default Button1;
