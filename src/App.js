import React, { Component } from 'react';
import logo from './logo.svg';
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

    this.handleClick - this.handleClick.bind(this);
    this.handleSubmit - this.handleSubmit.bind(this);
  }

  componentDidMount() {
  let dataGrab = (response)=> {
    this.setState({dataCopy: response});
  };
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
