import React, { Component } from 'react';
import './App.css';
import { Header } from './Header.jsx';
import { InputForm } from './InputForm.jsx';
import { AddPlayer } from './AddPlayer.jsx';
import { Compare } from './Compare.jsx';
import { Footer } from './Footer.jsx';

class App extends Component {

  constructor() {
    super();
    this.state = {
      dataCopy: [],
      inputName: '',
      compareName: ''
    }
    
  }

  componentDidMount() {
  let dataGrab = (response) => {
    this.setState({dataCopy: response});
  };
  console.log(this.state.dataCopy, "dataCopy");
  let apiURL = 'https://owapi.net/api/v3/u/Kn33s-1861/heroes';
  return fetch(apiURL)
        .then(response => response.json())
        .then(dataGrab)
}

  render() {
    return (
      <div className="App">
        <Header />
        <InputForm />
        <AddPlayer />
        <Compare />
        <Footer />
      </div>
    );
  }
}

export default App;
