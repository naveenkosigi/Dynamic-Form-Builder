import { Fragment, useCallback } from "react";
import useInput from "./use-Input"


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
const Input = (props) => {

    const { inputValue,changeHandler,isInvalid,hasTouched,touchHandler } = useInput(props.options.misc.validator);

    const isFieldValid = isInvalid && hasTouched;
    
    const inputOptions = {
        ...props.options.input
    };

    return(
        <div className="form-group">
            <label for={props.options.input.id}>{props.options.label.name}</label>
            <input {...inputOptions} onChange={changeHandler} value={inputValue} class="form-control" onBlur={touchHandler}/>
            {isFieldValid && <p class="text-danger">Error Field</p>}
        </div>   
    )
}

export default Input;