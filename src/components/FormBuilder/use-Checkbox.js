import { useCallback, useContext, useEffect, useState } from "react"
import FormContext from "./FormContext";

const useCheckbox = (props) => {
    
    const formContext = useContext(FormContext);
    const fieldName = props.input.name;

    const inputValue = formContext.payload[fieldName];

    const [isInvalid,setInvalid] = useState(false);
    const [hasTouched,setHasTouched] = useState(false);
    
    // useEffect(() => {
    //     setInvalid(props.misc.validator(inputValue));
    // },[props.misc.validator]);
    
    const changeHandler = (event) => {
        formContext.updateField({[fieldName] : event.target.checked});
        touchHandler(event);
    }

    const touchHandler = (event) => {
        setHasTouched(true);
        setInvalid(!event.target.checked);
    }

    return{
        inputValue,
        changeHandler,
        isInvalid,
        hasTouched,
        touchHandler
    }
}

export default useCheckbox;