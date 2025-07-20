import React from "react";
interface props {
  cartitemscount: number;
}
const NavBar = ({ cartitemscount }: props) => {
  return <div>NavBar : {cartitemscount}</div>;
};

export default NavBar;
