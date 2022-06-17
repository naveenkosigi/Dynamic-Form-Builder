import { useContext,useEffect,useState } from "react";
import FormContext from "./FormContext";

const useSelect  = (props) => {
    
    const formContext = useContext(FormContext);
    const fieldName = props.select.name;

    const inputValue = formContext.formState[fieldName].value;

    const isInvalid = !formContext.formState[fieldName].validity;
    const [hasTouched,setHasTouched] = useState(false);

    useEffect(() => {
        formContext.updateField({
            [fieldName] : {
                value : inputValue,
                validity: !(inputValue.trim().length === 0)
            }
        });
    },[]);

    const changeHandler = (event) => {
        formContext.updateField({
            [fieldName] : {
                value : event.target.value,
                validity: !(event.target.value.trim().length === 0)
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
        touchHandler,
        isInvalid,
        hasTouched
    }

}

export default useSelect;