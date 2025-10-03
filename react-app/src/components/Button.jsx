import React from "react";
import "./button.css";
const Button = ({ text = "Clicked", styles = "" }) => {
  return <button className={styles}>{text}</button>;
};

export default Button;
