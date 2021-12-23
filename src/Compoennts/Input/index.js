import React from "react";

function Input(props) {
  return (
    <div>
      <input
        type={props.type}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeHolder}
        onClick={props.onClick}
      />
    </div>
  );
}
export default Input;
