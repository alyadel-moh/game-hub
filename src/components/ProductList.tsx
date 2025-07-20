import React, { useEffect, useState } from "react";
// if we have interface of one varibale we can  add it directly as an object instead of creating it outside
const ProductList = ({ category }: { category: string }) => {
  const [products, setproducts] = useState<string[]>([]);
  // use effect to call server to fetch product get excuted after each render <after each usestate update>
  useEffect(() => {
    console.log("fetching products in", category);
    setproducts(["clothing", "household"]);
  }, [category]); //when pass array effect will be dep on values inside array anytime this dep changes react will rerun our effect
  // if 2nd argument <array> is not here the effect will excute after every render
  // if empty array will be excute once the first time our component is rendered
  // if any state orprops is added react will rerun effect if any of these values changed
  return <div>ProductList</div>;
};

export default ProductList;
