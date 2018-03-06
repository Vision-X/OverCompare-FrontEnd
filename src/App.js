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
      compare1: [],
      compare2: [],
      inputName: '',
      compareName: ''
    }

  }

  fetchFirstPlayer = () => {

    let apiURL2 = 'https://owapi.net/api/v3/u/JJonak-3163/heroes';
    let dataGrab2 = (response) => {
      this.setState({compare2: response});
      console.log(this.state.compare2, "compare2");
    };
    return fetch(apiURL2)
    .then(response => response.json())
    .then(dataGrab2)
  }

  fetchSecondPlayer = () => {

    let dataGrab1 = (response) => {
      this.setState({compare1: response});
      console.log(this.state.compare1, "compare1");
    };
    let apiURL1 = 'https://owapi.net/api/v3/u/Kn33s-1861/heroes';
    return fetch(apiURL1)
    .then(response => response.json())
    .then(dataGrab1)
  }


  componentDidMount() {
    this.fetchFirstPlayer().then(() => {
      setTimeout(() => this.fetchSecondPlayer(), 1100)
    })
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
