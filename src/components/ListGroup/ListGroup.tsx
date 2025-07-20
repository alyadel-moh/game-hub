import React, { useState } from "react";
interface props {
  items: string[];
  heading: string;
  onselect: (item: string) => void;
}
const ListGroup = ({ items, heading, onselect }: props) => {
  const [selectedindex, setselectedindex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedindex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setselectedindex(index);
              console.log(item, index);
              onselect(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
