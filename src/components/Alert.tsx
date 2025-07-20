import React, { type ReactNode } from "react";
interface props {
  children: ReactNode;
  onclose: () => void;
}
const Alert = ({ children, onclose }: props) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onclose}
      ></button>
    </div>
  );
};

export default Alert;
