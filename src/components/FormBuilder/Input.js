import { Fragment } from "react";
import useInput from "./use-Input"


/**
 * 
 * @param {*} props
 * {
 *   label : {}
 *   input : {}   
 * } 
 * @returns 
 */
const Input = (props) => {
    const { inputValue,changeHandler,isInvalid } = useInput('1',(value) => value >=5);
    
    const inputOptions = {
        ...props.options.input
    };

    return(
        <div className="form-group">
            <label for={props.options.input.id}>{props.options.label.name}</label>
            <input {...inputOptions} onChange={changeHandler} value={inputValue} class="form-control"/>
            {isInvalid && <p class="text-danger">.text-danger</p>}
        </div>   
    )
}

export default Input;