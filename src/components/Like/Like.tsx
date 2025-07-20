import { AiFillHeart } from "react-icons/ai";
import "./Like.css";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
const Like = () => {
  const [activee, settactive] = useState(false);
  if (activee)
    return (
      <AiFillHeart color="red" size={20} onClick={() => settactive(false)} />
    );
  return <AiOutlineHeart size={20} onClick={() => settactive(true)} />;
};
export default Like;
