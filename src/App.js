import logo from './logo.svg';
import './App.css';
import Input from './components/FormBuilder/Input';

function App() {
  return (
    <div className="container">
      <h1>Test</h1>
      <Input options = {{
        label : {name : 'Test Field'},
        input : {type : 'number'}
      }}
      />
    </div>
  );
}

export default App;
