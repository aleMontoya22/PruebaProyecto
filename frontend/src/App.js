import logo from './logo.svg';
import './App.css';
import RandomPokemon from './archivo'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"s
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>        
      </header>
      <main>
        <RandomPokemon />
      </main>
    </div>
  );
}

export default App;
