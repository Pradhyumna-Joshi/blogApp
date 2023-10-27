import React from "react";
import { FaBlog } from "react-icons/fa";
const Logo = ({ width = "40px" }) => {
  return (
    <div className="pl-10">
      <FaBlog size={width} />
    </div>
  );
};

export default Logo;
