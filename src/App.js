import logo from './logo.svg';
import './App.css';
import Input from './components/FormBuilder/Input';
import FormBuilder from './components/FormBuilder/FormBuilder';
import FormContextProvider from './components/FormBuilder/FormContextProvider';

function App() {
  console.log("App render");

  return (
    <div className="container">
      <h1>Test</h1>
      <FormContextProvider formOptions={[
        {
          label : {name : 'Test Field'},
          input : {type : 'number',name : 'field1',id:'id1'},
          misc : {validator : (value => value > 5)}
        },
        {
          label : {name : 'Test Field 2'},
          input : {type : 'text',name : 'field2',id:'id2'},
          misc : {validator : (value => value.trim().length === 0)}
        },
        {
          label : {name : 'Test Field 3'},
          input : {type : 'checkbox',name : 'field3',id:'id3'},
          misc : {validator : (value => value > 5)}
        }
      ]}/>
    </div>
  );
}

export default App;
