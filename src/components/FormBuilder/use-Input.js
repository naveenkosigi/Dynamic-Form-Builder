import { useCallback, useState } from "react"

const useInput = (defaultValue,validator) => {
    const [inputValue,setInputValue] = useState(defaultValue || '');
    const [isInvalid,setInvalid] = useState(true);

    const customValidator = useCallback(() => {
        setInvalid(validator(inputValue));
    },[validator]);

    const changeHandler = (event) => {
        setInputValue(event.target.value);
        customValidator();
    }
    return{
        inputValue,
        changeHandler,
        isInvalid
    }
}

export default useInput;