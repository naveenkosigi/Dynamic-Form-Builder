import { useRef, useState } from "react";

// {
//     label: { name: "Test Field 2" },
//     input: { type: "text", name: "field2", id: "id2" },
//     misc: { validator: (value) => value.trim().length === 0 },
//   }

// {
//     label: { name: "Test Field 3" },
//     select: { name: "field4", id: "id4" },
//     dropDownOptions: {
//       placeholder: "Select A Value",
//       options: [
//         { name: "Option 1", value: "Value 1" },
//         { name: "Option 2", value: "Value 2" },
//         { name: "Option 3", value: "Value 3" },
//         { name: "Option 4", value: "Value 4" },
//       ],
//     },
//   }

const StaticFormConstructor = () => {
  const inputTupeRef = useRef();
  const selectOptionsRef = useRef();

  const [showValidator, setShowValidator] = useState(true);
  const [showSelect, setShowSelect] = useState(false);

  const onInputChange = (event) => {
    if (event.target.value === "text" || event.target.value === "number") {
      setShowValidator(true);
      setShowSelect(false);
      return;
    }
    if(event.target.value === 'select'){
        setShowSelect(true);
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

        console.log("Generated Config : \n",inputConfig);
        return;
    }
    else if(inputTupeRef.current.value === 'select'){
        const inputConfig = {};
        inputConfig.label={};
        inputConfig.select={};
        inputConfig.dropDownOptions={};

        for(let [key,value] of formData){
            switch(key){
                case 'fieldLabel':
                    inputConfig.label = {};
                    inputConfig.label.name=value;
                    break;
                case 'fieldName':
                    inputConfig.select.name=value;
                    inputConfig.select.id=value;
                    break;               
            }
        }

        inputConfig.dropDownOptions.placeholder = "Select a value";

        const options = selectOptionsRef.current.value;

        const optionsConfig=options.split(",").map((Option) => {
            const option = {};
            option.name=option.value=Option;
            return option;
        });

        inputConfig.dropDownOptions.options = optionsConfig;
        console.log("Generated Config : \n",inputConfig);
        return;

    }

  };

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
          id="fieldType"
          onChange={onInputChange}
        >
          <option value="text">Text</option>
          <option value="number">Number</option>
          <option value="checkbox">Checkbox</option>
          <option value="select">Select</option>
        </select>
      </div>
      {showValidator && (
        <div class="form-group">
          <label for="fieldValidation">Field Validation</label>
          <input
            type="text"
            class="form-control"
            id="fieldValidation"
            placeholder="Eg. value > 10 && value<20"
            name="fieldValidation"
            required
          />
          <small id="smallValidationField" class="form-text text-muted">
            The callback returns the Param as value for input type elements
          </small>
        </div>
      )}
      {showSelect && (
        <div class="form-group">
          <label for="fieldSelectOptions">Select Options</label>
          <input
            type="text"
            class="form-control"
            id="fieldSelectOptions"
            placeholder="Eg. Apple,Orange,Mango"
            name="fieldSelectOptions"
            required
            ref={selectOptionsRef}
          />
          <small id="smallFieldSelectOptions" class="form-text text-muted">
            Enter the required options comma seperated
          </small>
        </div>
      )}
      <div className="buttons-container" style={{ textAlign: "center" }}>
        <button type="submit" className="btn btn-primary">
          Print Config To Console
        </button>
      </div>
    </form>
  );
};

export default StaticFormConstructor;
