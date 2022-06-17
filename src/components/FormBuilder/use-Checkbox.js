import { useContext, useEffect, useState } from "react"
import FormContext from "./FormContext";

const useCheckbox = (props) => {
    
    const formContext = useContext(FormContext);
    const fieldName = props.input.name;

    const inputValue = formContext.formState[fieldName].value;

    const isInvalid = !formContext.formState[fieldName].validity;
    const [hasTouched,setHasTouched] = useState(false);
    
    useEffect(() => {
        formContext.updateField({
            [fieldName] : {
                value : inputValue,
                validity: inputValue
            }
        });
    },[]);
    const changeHandler = (event) => {
        formContext.updateField({
            [fieldName] : {
                value : event.target.checked,
                validity: event.target.checked
            }
        });
        touchHandler(event);
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

export default useCheckbox;