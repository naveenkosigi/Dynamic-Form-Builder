import { useCallback, useEffect, useState } from "react"

const useInput = (customValidator) => {
    const [inputValue,setInputValue] = useState('1');
    const [isInvalid,setInvalid] = useState(false);
    const [hasTouched,setHasTouched] = useState(false);
    
    useEffect(() => {
        setInvalid(customValidator(inputValue));
    },[customValidator]);
    
    const changeHandler = (event) => {
        setInputValue(event.target.value);
        setHasTouched(true);
    }

    const touchHandler = (event) => {
        setHasTouched(true);
        setInvalid(customValidator(event.target.value));
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