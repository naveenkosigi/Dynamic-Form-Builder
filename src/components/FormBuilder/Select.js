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

  return (
    <div class="form-group">
      <label htmlFor={props.options.select.id}>{props.options.label.name}</label>
      <select {...props.options.select} class="form-control" id={props.options.select.id} name={props.options.select.name}>
        <option value="">{props.options.dropDownOptions.placeholder}</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
    </div>
  );

};

export default Select;
