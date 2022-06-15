import { useMemo, useReducer } from "react"
import Input from "./Input";
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

    const formConstructor = props.formOptions.map((option) => {
        return (
            <Input options={option} />
        );
    })

    const [state,formActionDispatcher] = useReducer(formReducer,constructedPayload);

    return(
        <form>
            {formConstructor}
        </form>
    )
}

export default FormBuilder;