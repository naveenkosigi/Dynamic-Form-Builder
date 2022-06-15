import { Fragment, useCallback, useContext, useEffect } from "react";
import FormContext from "./FormContext";
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

    const { inputValue,changeHandler,isInvalid,hasTouched,touchHandler } = useInput(props.options);

    const isFieldValid = isInvalid && hasTouched;
    
    const inputOptions = {
        ...props.options.input
    };

    const fieldName = props.options.input.name ;
    
    const updatedData = {[fieldName] : inputValue};
    
    const formContext = useContext(FormContext);

    useEffect(() => {
        formContext.updateField(updatedData);
    },[inputValue])

    return(
        <div className="form-group">
            <label htmlFor={props.options.input.id}>{props.options.label.name}</label>
            <input {...inputOptions} onChange={changeHandler} value={inputValue} className="form-control" name={props.options.input.name} onBlur={touchHandler}/>
            {isFieldValid && <p class="text-danger">Error Field</p>}
        </div>   
    )
}

export default Input;