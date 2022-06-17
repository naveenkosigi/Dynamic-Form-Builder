import { useCallback, useContext, useEffect, useState } from "react"
import FormContext from "./FormContext";

const useInput = (props) => {
    
    const formContext = useContext(FormContext);
    const fieldName = props.input.name;

    const inputValue = formContext.formState[fieldName].value;

    const isInvalid = !formContext.formState[fieldName].validity;
    const [hasTouched,setHasTouched] = useState(false);

    useEffect(() => {
        formContext.updateField({
            [fieldName] : {
                value : inputValue,
                validity: !props.misc.validator(inputValue)
            }
        });
    },[])
    
    const changeHandler = (event) => {
        
        formContext.updateField({
            [fieldName] : {
                value : event.target.value,
                validity: !props.misc.validator(event.target.value)
            }
        });
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