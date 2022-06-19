import logo from './logo.svg';
import './App.css';
import Input from './components/FormBuilder/Input';
import FormBuilder from './components/FormBuilder/FormBuilder';
import FormContextProvider from './components/FormBuilder/FormContextProvider';
import StaticFormConstructor from './components/FormBuilder/StaticFormConstructor';

function App() {
  console.log("App render");

  return (
    <div class="row justify-content-around align-items-center main-page-container">
      <div className="col-5 form-wrapper" style={{maxHeight:'500px',overflow:'auto'}}>
        <h1 style={{ textAlign: "center" }}>Form Builder POC</h1>
        <FormContextProvider
          formOptions={[
            {
              label: { name: "Test Field" },
              input: { type: "number", name: "field1", id: "id1" },
              misc: { validator: (value) => !value || value > 5 },
            },
            {
              label: { name: "Test Field 2" },
              input: { type: "text", name: "field2", id: "id2" },
              misc: { validator: (value) => value.trim().length === 0 },
            },
            {
              label: { name: "Test Field 3" },
              input: { type: "checkbox", name: "field3", id: "id3" },
            },
            {
              label: { name: "Test Field 3" },
              select: { name: "field4", id: "id4" },
              dropDownOptions: {
                placeholder: "Select A Value",
                options: [
                  { name: "Option 1", value: "Value 1" },
                  { name: "Option 2", value: "Value 2" },
                  { name: "Option 3", value: "Value 3" },
                  { name: "Option 4", value: "Value 4" },
                ],
              },
            }
          ]}
        />
      </div>
      <div className='col-5 form-wrapper' style={{maxHeight:'569px',overflow:'auto'}}>
        <h1 style={{textAlign : 'center'}}>Get Form Config Here ! </h1>
        <StaticFormConstructor />
      </div>
    </div>
  );
}

export default App;
