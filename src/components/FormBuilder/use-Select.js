import { useContext,useEffect,useState } from "react";
import FormContext from "./FormContext";

const useSelect  = (props) => {
    
    const formContext = useContext(FormContext);
    const fieldName = props.select.name;

    const inputValue = formContext.payload[fieldName];

    const [isInvalid,setInvalid] = useState(false);
    const [hasTouched,setHasTouched] = useState(false);

    useEffect(() => {
        setInvalid(inputValue.trim().length === 0);
    },[inputValue]);

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
        touchHandler,
        isInvalid,
        hasTouched
    }

}

export default useSelect;