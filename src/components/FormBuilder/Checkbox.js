import { Fragment, useCallback, useContext, useEffect } from "react";
import FormContext from "./FormContext";
import useCheckbox from "./use-Checkbox";

/**
 * 
 * @param {*} props
 * {
 *   label : {}
 *   input : {} 
 *   misc : {}     
 * } 
 * @returns 
 */
const Checkbox = (props) => {

    const { inputValue,changeHandler,isInvalid,hasTouched,touchHandler } = useCheckbox(props.options);

    const isFieldValid = isInvalid && hasTouched;
    
    const inputOptions = {
        ...props.options.input
    };

    return (
    //   <div className="form-group form-check">
    //     <label htmlFor={props.options.input.id}>
    //       <input
    //         {...inputOptions}
    //         onChange={changeHandler}
    //         value={inputValue}
    //         className="form-control"
    //         name={props.options.input.name}
    //         onBlur={touchHandler}
    //       />
    //       {props.options.label.name}
    //     </label>
    //     {isFieldValid && <p class="text-danger">Error Field</p>}
    //   </div>

    <div className="form-group form-check">
    <label className="form-check-label">
        <input type="checkbox" onChange={changeHandler} name={props.options.input.name} className="form-check-input" checked={inputValue === true}/>
        {props.options.label.name}
    </label>
    {isFieldValid && <p className="text-danger">Error Field</p>}
    </div>
    );
}

export default Checkbox;