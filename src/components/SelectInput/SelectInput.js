import React from "react";
import "./SelectInput.css";

function SelectInput(props) {
   function handleChange(event) {
      console.log(event);
      props.handleChange(event.target.value);
   }
   return (
      <div className="container">
         <label>{props.label}</label>
         <select
            required={props.required}
            onChange={handleChange}
            value={props.inputValue}
         >
            {props.itens.map((item) => (
               <option key={item}>{item}</option>
            ))}
         </select>
      </div>
   );
}

export default SelectInput;
