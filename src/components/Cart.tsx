import React from "react";
interface props {
  cartitems: string[];
  onclear: () => void;
}
const Cart = ({ cartitems, onclear }: props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartitems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onclear}>Clear</button>
    </>
  );
};

export default Cart;
