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

const Title = function(props) {
  return <h1>{props.title}</h1>;
}

class Catalog extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      filename: 'images/img1.jpg',
      alt: 'image 1'
    };
  }

  renderNormal(){
    return (
      <div>
        <h2>{this.state.alt}</h2>
        <img src={this.state.filename} alt={this.state.alt} />
      </div>
    );
  }
  
  render(){
    return this.renderNormal()
  }
}

function Lab06App() {
  return (
    <main>
      <div>
      <Title title = "Lab06 – React Application"/>
      <Catalog Catalog />
      </div>
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById('react-lab'));
root.render(<Lab06App />)

export default App;
