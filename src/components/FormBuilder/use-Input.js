import { useCallback, useContext, useEffect, useState } from "react"
import FormContext from "./FormContext";

const useInput = (props) => {
    
    const formContext = useContext(FormContext);
    const fieldName = props.input.name;

    const inputValue = formContext.payload[fieldName];

    const [isInvalid,setInvalid] = useState(false);
    const [hasTouched,setHasTouched] = useState(false);
    
    useEffect(() => {
        setInvalid(props.misc.validator(inputValue));
    },[inputValue,props.misc]);
    
    const changeHandler = (event) => {
        formContext.updateField({[fieldName] : event.target.value});
        setHasTouched(true);
    }

    const touchHandler = (event) => {
        setHasTouched(true);
    }

    return{
        inputValue,
        changeHandler,
        isInvalid,
        hasTouched,
        touchHandler
    }
}

export default useInput;