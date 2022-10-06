import React from "react";
import Input from "./Input";

function Fieldset(props) {
  const { inputs, name, handleChange } = props;

  return (
    <fieldset>
      <legend>{name}</legend>
      {inputs.map((input, index) => {
        return (
          <Input
            type={input.type}
            id={input.id}
            value={input.value}
            labelText={input.labelText}
            key={index}
            required={input.required}
            handleChange={handleChange}
          />
        );
      })}
    </fieldset>
  );
}

export default Fieldset;
