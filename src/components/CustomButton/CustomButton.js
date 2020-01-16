import React from "react";

import "./CustomButton.style.scss";

const CustomButton = ({ children, ...props }) => {
  return (
    <button {...props} className="customBtn">
      {children}
    </button>
  );
};

export default CustomButton;
