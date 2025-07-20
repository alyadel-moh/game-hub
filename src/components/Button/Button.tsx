import React from "react";
interface props {
  children: string;
  color?: string;
  onclickeeee: () => void;
}
const Button = ({ children, color, onclickeeee }: props) => {
  return (
    <button className={"btn btn-" + color} onClick={onclickeeee}>
      {children}
    </button>
  );
};

export default Button;
