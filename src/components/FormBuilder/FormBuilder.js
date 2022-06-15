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

    

    const formConstructor = props.formOptions.map((option,index) => {
        return (
            <Input options={option} key={index}/>
        );
    })

    return(
        <form>
            {formConstructor}
        </form>
    )
}

export default FormBuilder;