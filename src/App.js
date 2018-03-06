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
      player1: '',
      player2: ''
    }
    this.handleChange = this.handleChange.bind(this);
    // this.onSubmit = this.handleSubmit.bind(this);
  }

  fetchFirstPlayer() {
    let player1 = this.state.player1;
    if (player1.length > 1) {
    let apiURL1 = 'https://owapi.net/api/v3/u/' + player1 + '/heroes';
    // let apiURL2 = 'https://owapi.net/api/v3/u/JJonak-3163/heroes';
    let dataGrab2 = (response) => {
      this.setState({compare1: response});
      console.log(this.state.compare1, "compare1");
    };
    return fetch(apiURL1)
    .then(response => response.json())
    .then(dataGrab2)
    .catch()
    }
  }

  fetchSecondPlayer() {
    let player2 = this.state.player2;
    if (player2.length > 1) {
      let apiURL2 = 'https://owapi.net/api/v3/u/' + player2 + '/heroes';
      // let apiURL1 = 'https://owapi.net/api/v3/u/Kn33s-1861/heroes';
      let dataGrab1 = (response) => {
        this.setState({compare2: response});
        console.log(this.state.compare2, "compare2");
      };
      return fetch(apiURL2)
      .then(response => response.json())
      .then(dataGrab1)
      .catch()
    }
  }

  handleChange(event) {
    let targetField = event.target.name;
    if (targetField === 'player1') {
      this.setState({player1: event.target.value})
      console.log(this.state.player1, "player1");
    } else if (targetField === 'player2') {
      this.setState({player2: event.target.value})
      console.log(this.state.player2, "player2");
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit occured");
    this.fetchFirstPlayer().then(() => {
      setTimeout(() => this.fetchSecondPlayer(), 1100)
    })
  }


  componentDidMount() {
    // this.fetchFirstPlayer().then(() => {
    //   setTimeout(() => this.fetchSecondPlayer(), 1100)
    // })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <InputForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <AddPlayer />
        <Compare />
        <Footer />
      </div>
    );
  }
}

export default App;
