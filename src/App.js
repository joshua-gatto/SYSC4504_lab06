import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';


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

function Title(props) {
  return <h1>{props.title}</h1>;
}

function Lab06App() {
  return (
    <main>
      <Title title="Lab06 – React Application" />
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById('react-lab'));

export default App;
