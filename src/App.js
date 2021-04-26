import logo from './logo.svg';
import './App.css';

function snack() {
  return "Cereal";
}

function App() {
  const greeting = "Hello";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{greeting}</h1>
        <h1>Test that github work</h1>
        <h1>My midnight snack is {snack()}</h1>
        <h1>Hello</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React. Sup cuddi 
        </a>
      </header>
    </div>
  );
}

export default App;
