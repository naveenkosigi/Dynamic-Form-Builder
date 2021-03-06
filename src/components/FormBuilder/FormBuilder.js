import { useContext, useMemo, useReducer } from "react"
import Checkbox from "./Checkbox";
import FormContext from "./FormContext";
import Input from "./Input";
import Select from "./Select";
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
    
    if (option.input) {
      switch (option.input.type.toLowerCase()) {
        case "checkbox":
          return <Checkbox options={option} key={index} />;
        case "text":
        case "number":
          return <Input options={option} key={index} />;
      }
    }
    else if (option.select) {
      return <Select options={option} key={index} />
    }

  });

  const formContext = useContext(FormContext);

  const submitHandler = () => {
    
    console.log("Form Payload",formContext.formState);

    if(formContext.validity === true){
      console.log("Form Valid");
    }
    else{
      console.log("Form Invalid");
    }
  };

  const cancelHandler = () => {
    formContext.resetForm();
  }

  return (
    <form>
      {formConstructor}
      <div className="form-submit-cancel-container" style={{textAlign:"center"}}>
      <button type="button" className="btn btn-primary" onClick={submitHandler}>
        Save
      </button>
      <button type="button" className="btn btn-danger" onClick={cancelHandler}>
        Cancel
      </button>
      </div>
    </form>
  );
};

export default FormBuilder;