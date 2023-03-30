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
  constructor(props) {
    super(props);
    this.state = {
      filename: 'images/img1.jpg',
      alt: 'image 1'
    };

    this.renderNormal = this.renderNormal.bind(this);
    this.renderEdit = this.renderEdit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAltChange = this.handleAltChange.bind(this);

  }

  renderNormal() {
    return (
      <div>
        <h2>{this.state.alt}</h2>
        <img src={this.state.filename} alt={this.state.alt} />
      </div>
    );
  }

  renderEdit() {
    return (
      <div>
        <p>
          <label for="options">Filename: </label>
          <select name="options" defaultValue={this.state.filename} onChange={this.handleNameChange}>
            <option value="images/img1.jpg">Image 1</option>
            <option value="images/img2.jpg">Image 2</option>
            <option value="images/img3.jpg">Image 3</option>
            <option value="images/img4.jpg">Image 4</option>
          </select>
        </p>
        <p>
          <label for="alt">Alt: </label>
          <input name="alt" type="text" value={this.state.alt}/>
        </p>
        <button onClick={this.handleAltChange}>Save</button>
      </div>
    );
  }


  handleAltChange(event){
    this.setState({alt: event.target.value});
  }

  handleNameChange(event) {
    this.setState({filename: event.target.value});
  }
  
  render() {
    return this.renderEdit()
  }
}

function Lab06App() {
  return (
    <main>
      <Title title = "Lab06 – React Application"/>
      <Catalog Catalog />
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById('react-lab'));
root.render(<Lab06App />)

export default App;
