import React from "react";

import "./FormInput.style.scss";

const FormInput = ({ handleChange, label, ...props }) => {
  return (
    <div className="form-group">
      <input className="form-input" onChange={handleChange} {...props} />
      {label && (
        <label
          className={
            props.value.length ? "shrink form-input-label" : "form-input-label"
          }
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
