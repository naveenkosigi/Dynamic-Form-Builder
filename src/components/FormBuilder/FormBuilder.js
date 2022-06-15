import { useContext, useMemo, useReducer } from "react"
import FormContext from "./FormContext";
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
  const formConstructor = props.formOptions.map((option, index) => {
    return <Input options={option} key={index} />;
  });

  const formContext = useContext(FormContext);

  const submitHandler = () => {
    console.log(formContext.payload);
  };

  const cancelHandler = () => {
    formContext.resetForm();
  }

  return (
    <form>
      {formConstructor}
      <button type="button" className="btn btn-primary" onClick={submitHandler}>
        Save
      </button>
      <button type="button" className="btn btn-danger" onClick={cancelHandler}>
        Cancel
      </button>
    </form>
  );
};

export default FormBuilder;