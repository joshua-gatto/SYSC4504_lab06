import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


const Title = function(props) {
  return <h1>{props.title}</h1>;
}

class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filename: 'images/img1.jpg',
      alt: 'image 1',
      editing: false
    };

    this.renderNormal = this.renderNormal.bind(this);
    this.renderEdit = this.renderEdit.bind(this);
    this.editClick = this.editClick.bind(this);
    this.saveClick = this.saveClick.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAltChange = this.handleAltChange.bind(this);

  }

  renderNormal() {
    return (
      <div>
        <h2>{this.state.alt}</h2>
        <img src={this.state.filename} alt={this.state.alt} />
        <button onClick={this.editClick}>Toggle Edit Mode</button>
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
          <input name="alt" type="text" value={this.state.alt} onInput={this.handleAltChange}/>
        </p>
        <button onClick={this.saveClick}>Save</button>
      </div>
    );
  }


  handleAltChange(event) {
    this.setState({alt: event.target.value});
  }

  handleNameChange(event) {
    this.setState({filename: event.target.value});
  }

  editClick() {
    this.setState({editing: true});
  }

  saveClick() {
    this.setState({editing: false});
  }

  render() {
    if (this.state.editing) {
      return this.renderEdit();
    } else {
      return this.renderNormal();
    }
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
