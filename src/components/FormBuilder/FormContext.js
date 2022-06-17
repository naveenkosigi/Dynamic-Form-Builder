import { createContext} from "react";

const FormContext = createContext({
    payload : {},
    updateField : () => {},
    resetForm : () => {},
    resetField : () => {},
    validity:false
});

export default FormContext