import React from "react";
import "./Input.css";

function Input(props) {
   function handleChange(event) {
      props.handleChange(event.target.value);
   }

   return (
      <div className="container">
         <label name={props.label}>{props.label}</label>
         <input
            required={props.required}
            placeholder={props.placeholder}
            name={props.label}
            value={props.inputValue}
            onChange={handleChange}
         />
      </div>
   );
}

export default Input;
