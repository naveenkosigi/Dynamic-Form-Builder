import { useRef, useState } from "react";

// {
//     label: { name: "Test Field 2" },
//     input: { type: "text", name: "field2", id: "id2" },
//     misc: { validator: (value) => value.trim().length === 0 },
//   }

const StaticFormConstructor = () => {
  const inputTupeRef = useRef();

  const [showValidator, setShowValidator] = useState(true);

  const onInputChange = (event) => {
    if (event.target.value === "text" || event.target.value === "number") {
      setShowValidator(true);
      return;
    }
    setShowValidator(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    if(inputTupeRef.current.value === 'number' || inputTupeRef.current.value === 'text' || inputTupeRef.current.value === 'checkbox'){
        const inputConfig = {};
        inputConfig.label={};
        inputConfig.input={};
        inputConfig.misc={};

        for(let [key,value] of formData){
            switch(key){
                case 'fieldLabel':
                    inputConfig.label = {};
                    inputConfig.label.name=value;
                    break;
                case 'fieldName':
                    inputConfig.input.name=value;
                    inputConfig.input.id=value;
                    break;
                case 'fieldType':
                    inputConfig.input.type=value;
                    break;
                case 'fieldValidation':
                    inputConfig.misc.validator = eval("value => "+ value);
                    break;                
            }
        }

        console.log(inputConfig);
        return;
    }

  };

  const onShowConfig = (event) => {

  }

  return (
    <form onSubmit={onSubmit}>
      <div class="form-group">
        <label for="fieldName">Field Name</label>
        <input
          type="text"
          class="form-control"
          id="fieldName"
          placeholder="Enter Field Name"
          name="fieldName"
          required
        />
        <small id="fieldNameHelp" class="form-text text-muted">
          Field Name must be unique for every field.
        </small>
      </div>
      <div class="form-group">
        <label for="fieldLabel">Field Label</label>
        <input
          type="text"
          class="form-control"
          id="fieldLabel"
          placeholder="Enter Field Label"
          name="fieldLabel"
          required
        />
      </div>
      <div class="form-group">
        <label for="fieldType">Select Field Type</label>
        <select
          defaultValue="text"
          className="form-control"
          required
          ref={inputTupeRef}
          name="fieldType"
          onChange={onInputChange}
        >
          <option value="text">Text</option>
          <option value="number">Number</option>
          <option value="checkbox">Checkbox</option>
          <option value="select">Select</option>
        </select>
      </div>
      {showValidator && (<div class="form-group">
        <label for="fieldValidation">Field Validation</label>
        <input
          type="text"
          class="form-control"
          id="fieldValidation"
          placeholder="Eg. value > 10 && value<20"
          name="fieldValidation"
          required
        />
        <small id="validationField" class="form-text text-muted">
          The callback returns the Param as value for input type elements
        </small>
      </div>
      )}
      {/* <div class="form-group">
        <label for="fieldValidation">Field Validation</label>
        <input
          type="text"
          class="form-control"
          id="fieldValidation"
          placeholder="Eg. value > 10 && value<20"
          name="fieldValidation"
          required
        />
        <small id="validationField" class="form-text text-muted">
          The callback returns the Param as value for input type elements
        </small>
      </div> */}
      <div className="buttons-container" style={{ textAlign: "center" }}>
        <button type="submit" className="btn btn-primary">
          Add Field To Form
        </button>
      </div>
    </form>
  );
};

export default StaticFormConstructor;
