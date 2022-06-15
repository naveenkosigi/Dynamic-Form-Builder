import { useMemo, useReducer } from "react"
/*  [
     {label : {}
 *   input : {} 
 *   misc : {}
 *  }
 *  ]
 *   
*/
const FormBuilder = (props) => {

    const constructedPayload = useMemo(() => {
        const payLoad = {};

        props.formOptions.forEach((option) => {
            const inputName = option.input.name;
            payLoad[inputName] = '';
        });

        console.log("payload constructor");

        return payLoad;
    },[]);

    console.log("Memoized",constructedPayload);

    const formReducer = (state,action) => {
        switch(action.type){
            case 'UPDATE' : 
                return{
                    ...state,
                    ...action.data
                }
            case 'GET' : {
                return{
                    ...state
                }
            }    
            default : 
                return state;
        }
    }

    const [state,formActionDispatcher] = useReducer(formReducer,constructedPayload);

    return(
        <h1>Form Builder</h1>
    )
}

export default FormBuilder;