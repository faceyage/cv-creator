import React, { Component } from "react";

class Input extends Component {
  render() {
    const { type, id, label, required, value, handleChange } = this.props;

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
}

Input.defaultProps = {
  type: "text",
  value: "",
  required: false,
};

export default Input;
