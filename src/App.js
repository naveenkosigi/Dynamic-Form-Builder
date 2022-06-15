import logo from './logo.svg';
import './App.css';
import Input from './components/FormBuilder/Input';
import FormBuilder from './components/FormBuilder/FormBuilder';

function App() {
  console.log("App render");
  
  return (
    <div className="container">
      <h1>Test</h1>
      <FormBuilder formOptions={[
        {
          label : {name : 'Test Field'},
          input : {type : 'number',name : 'field1'},
          misc : {validator : (value => value > 5)}
        }
      ]}/>
    </div>
  );
}

export default App;
