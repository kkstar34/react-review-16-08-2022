import logo from './logo.svg';
import './App.css';
import Child from './Child';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';


function App() {

  let name = "Fode Doumbia";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>Kouyate Karim</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Child name={name}/>

        <ClassComponent name={name}/>

        <FunctionComponent/>
      </header>
    </div>
  );
}

export default App;
