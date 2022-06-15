import logo from './logo.svg';
import './App.css';
import Input from './components/FormBuilder/Input';

function App() {
  return (
    <div className="container">
      <h1>Test</h1>
      <Input options = {{
        label : {name : 'Test Field'},
        input : {type : 'number'},
        misc : {validator : (value => value > 5)}
      }}
      />
      <Input options = {{
        label : {name : 'Test Field'},
        input : {type : 'text'},
        misc : {validator : (value => value.trim().length === 0)}
      }}
      />
    </div>
  );
}

export default App;
