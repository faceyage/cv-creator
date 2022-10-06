import React from "react";

function Input(props) {
  const { type, id, label, required, value, handleChange } = props;

  return (
    <div className="inputWrapper">
      <label> {label} </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={handleChange}
        required={required}
      />
    </div>
  );
}

Input.defaultProps = {
  type: "text",
  value: "",
  required: false,
};

export default Input;
