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
const Checkbox = (props) => {

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

    <div class="form-check">
    <label class="form-check-label">
        <input type="checkbox" onChange={changeHandler} value={inputValue} name={props.options.input.name} onBlur={touchHandler} class="form-check-input"/>
        {props.options.label.name}
    </label>
    </div>
    );
}

export default Checkbox;