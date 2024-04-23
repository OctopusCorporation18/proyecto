import logo from './logo.svg';
import fondo from './fondo.jpg';
import './App.css';

function App() {
  return (
      <div>

      <img src={fondo} className="App-logo" alt="logo" />
      </div>



    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
