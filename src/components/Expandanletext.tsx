import React, { useState } from "react";
interface props {
  children: string;
  maxchar?: number;
}
const Expandanletext = ({ children, maxchar = 100 }: props) => {
  const [state, setstate] = useState(false);
  if (children.length <= maxchar) return <p>{children}</p>;
  const text = state ? children : children.substring(0, maxchar);
  return (
    <p>
      <div>
        {text}....
        <button onClick={() => setstate(!state)}>
          {" "}
          // when state changed comp rerendered
          {state ? "less" : "more"}
        </button>
      </div>
    </p>
  );
};

export default Expandanletext;
