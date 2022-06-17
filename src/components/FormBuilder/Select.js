import useSelect from "./use-Select";

/**
 *
 * @param {*} props
 * {
 *   label : {name:'field name'},
 *   select : {},
 *   dropDownOptions : {placeholder : 'some-placeholder',options : [{ name : 'Option 1',value:'value 1'},{name : 'Option 2',value:'value 2'}]}   
 *   misc : {}
 * }
 * @returns
 */
const Select = (props) => {
   
  const {inputValue,changeHandler,touchHandler,hasTouched,isInvalid} = useSelect(props.options); 

  const isFieldValid = hasTouched && isInvalid;

  const dropDownList = props.options.dropDownOptions.options.map((option,index) => {
    return (<option value={option.value}>{option.name}</option>);
  });

  return (
    <div class="form-group">
      <label htmlFor={props.options.select.id}>
        {props.options.label.name}
      </label>
      <select value={inputValue}
        {...props.options.select}
        class="form-control"
        id={props.options.select.id}
        name={props.options.select.name}
        onBlur={touchHandler}
        onChange={changeHandler}
      >
        <option value="">{props.options.dropDownOptions.placeholder}</option>
        {dropDownList}
      </select>
      {isFieldValid && <p class="text-danger">Error Field</p>}
    </div>
  );

};

export default Select;
