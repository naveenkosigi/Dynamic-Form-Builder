import { useContext,useMemo,useReducer } from "react";
import FormBuilder from "./FormBuilder";
import FormContext from "./FormContext";

const FormContextProvider = (props) => {

    const constructedPayload = useMemo(() => {
        const payLoad = {};

        props.formOptions.forEach((option) => {
            const inputName = option.input?.name || option.select?.name;
            payLoad[inputName] = '';

            if(option.input?.type === 'checkbox') payLoad[inputName] = false;
            if(option.select) payLoad[inputName] = 'Value 3';
        });

        console.log("payload constructor");

        return payLoad;
    },[]);

    console.log("Memoized",constructedPayload);

    const formReducer = (state,action) => {
        switch (action.type) {
          case "UPDATE":
            return {
              ...state,
              ...action.data,
            };
          case "RESET":
            return{
                ...constructedPayload
            }  
          default:
            return state;
        }
    }

    const [state,formActionDispatcher] = useReducer(formReducer,constructedPayload);

    const context = useContext(FormContext);

    context.formState = state;
    context.updateField = (data) => {formActionDispatcher({type : 'UPDATE', data : data})};
    context.resetForm = () => {formActionDispatcher({type : 'RESET'})};

    return(
        <FormContext.Provider value={context}>
            <FormBuilder formOptions={props.formOptions} />
        </FormContext.Provider>
    )

}

export default FormContextProvider;