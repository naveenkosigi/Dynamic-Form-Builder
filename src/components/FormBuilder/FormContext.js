import { createContext} from "react";

const FormContext = createContext({
    formState : {},
    updateField : () => {},
    resetForm : () => {},
    resetField : () => {},
    validity:false
});

export default FormContext