import { createContext} from "react";

const FormContext = createContext({
    payload : {},
    updateField : () => {},
    resetForm : () => {},
    resetField : () => {}
});

export default FormContext