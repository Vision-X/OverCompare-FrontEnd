import React, { Component } from 'react';
// import Anime from 'react-anime';
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
      player2: '',
      matchedData: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  get buttonEnabled() {
    return (this.state.player1.length >= 5 && this.state.player2.length >= 5)
  }

  get buttonDisabled() {
    return ("false")
  }

  get dataIsThere() {
    if (this.state.player1.length > 0 && this.state.player2.length > 0) {
      return true
    } else {
      return false;
    }
  }

  findMatches = () => {
      let comp1 = this.state.compare1[0].stats.competitive;
      let comp2 = this.state.compare2[0].stats.competitive;
      let charArray = [];
      for (let character in comp1) {
        if (comp2.hasOwnProperty(character)) {
          console.log(character);
          // console.log(character, comp1[character], "comp1");
          // console.log(character, comp2[character], "comp2");
          charArray.push(character)
          // console.log(Object.keys(character));
          console.log(charArray);
          this.setState({matchedData: charArray})
      }
    }
  }

  fetchFirstPlayer() {
    let player1 = this.state.player1;
    if (player1.length > 1) {
    let apiURL1 = 'https://owapi.net/api/v3/u/' + player1 + '/heroes';
    let dataGrab1 = (response) => {
      this.setState({compare1: [response.us.heroes]});
      console.log(this.state.compare1, "compare1");
    };
    return fetch(apiURL1)
    .then(response => response.json())
    .then(dataGrab1)
    .catch()
    }
  }


  fetchSecondPlayer() {
    let player2 = this.state.player2;
    if (player2.length > 1) {
      let apiURL2 = 'https://owapi.net/api/v3/u/' + player2 + '/heroes';
      let dataGrab2 = (response) => {
        this.setState({compare2: [response.us.heroes]});
        console.log(this.state.compare2, "compare2");
      };
      return fetch(apiURL2)
      .then(response => response.json())
      .then(dataGrab2)
      .catch()
    }
  }

  handleChange(event) {
    let targetField = event.target.name;
    if (targetField === 'player1') {
      if (/^[aA-zZ0-9-]+$/g.test(event.target.value)) {
        this.setState({player1: event.target.value})
      } else {
        console.log('INVALID FORMAT: Only use letters, separated by -, followed by numbers')
      }
    } else if (targetField === 'player2') {
      if (/^[aA-zZ0-9-]+$/g.test(event.target.value)) {
        this.setState({player2: event.target.value})
      } else {
        console.log('INVALID FORMAT: Only use letters, separated by -, followed by numbers')
      }
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.player1.length > 5 && this.state.player2.length > 5) {
      console.log("submit occured");
      event.target.reset();
      this.fetchFirstPlayer().then(() => {
        setTimeout(() => {
          this.fetchSecondPlayer().then(this.findMatches)
        }, 1100)
      }).then(function() {
        document.getElementById('compare-section').classList.remove('hidden');
      })
    }
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  render() {
    return (
    // <Anime opacity={[0, 1]} translateY="2rem" delay={(e, i) => i * 10000}>
      <div className="App">
        <Header />
        <InputForm data1={this.findMatches} data2={this.state.compare2} disabled={!this.buttonEnabled} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <AddPlayer />
        <Compare data={this.state.matchedData} />
        <Footer />
      </div>
    // </Anime>
    );
  }
}

export default App;
