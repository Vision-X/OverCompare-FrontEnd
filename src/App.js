import React, { Component } from "react";
import "./App.css";
import "react-tabs/style/react-tabs.css";
import { Header } from "./Header.jsx";
import { InputForm } from "./InputForm.jsx";
import { Players } from "./Players.jsx";
import { AddPlayer } from "./AddPlayer.jsx";
import { Compare } from "./Compare.jsx";
import { Footer } from "./Footer.jsx";
import MDSpinner from 'react-md-spinner';

var clickCount = 0;

class App extends Component {
  constructor() {
    super();
    this.state = {
      compare1: [],
      compare2: [],
      player1: "",
      player2: "",
      matchedData: [],
      chartData: [{x: 2, y: 0}, {x: 2, y: 0}],
      isMounted: "none"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderCompare = this.renderCompare.bind(this);
  }

  get buttonEnabled() {
    return this.state.player1.length >= 5 && this.state.player2.length >= 5;
  }

  get buttonDisabled() {
    return "false";
  }

  get dataIsThere() {
    if (this.state.player1.length > 0 && this.state.player2.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  findMatches = () => {
    let stuff = [{ x: 2, y: 0 }, { x: 2, y: 0 }];
    let comp1 = this.state.compare1[0].stats.competitive;
    let comp2 = this.state.compare2[0].stats.competitive;
    let charArray = [];
    let stats = {};
    let stats2 = {};
    for (let character in comp1) {
      if (comp2.hasOwnProperty(character)) {
        // console.log(comp1[character].general_stats);
        // console.log(character, ".....", stats[character], "stats[character] line60");
        charArray.push(character);
        stats[character] = comp1[character].general_stats;
        stats2[character] = comp2[character].general_stats;
        this.setState({ isMounted: "none"})
        // console.log(charArray);
      }
    }
    this.setState({ matchedData: charArray,
                    competitiveStats1: stats,
                    competitiveStats2: stats2
                  });
    // this.setState({ competitiveStats1: stats });
    // this.setState({ competitiveStats2: stats2 });
    console.log("competitiveStats1...", this.state.competitiveStats1);
    console.log("competitiveStats2...", this.state.competitiveStats2);
    // for (let i = 0; i < Object.entries(stats).length; i++) {
    //   let name = Object.entries(stats)[i][0];
    //   let data = Object.entries(Object.entries(stats)[i][1]).sort();
    //   let data2 = Object.entries(Object.entries(stats2)[i][1]).sort();
    //   // console.log("data2............", data2);
    //   console.log("character: ", name);
    //   for (let j = 0; j < data.length && j < data2.length; j++) {
    //     // console.log("stat name: ", data[j][0]);
    //     // console.log("stat value: ", data[j][1]);
    //     // console.log("stat name2: ", data2[j][0]);
    //     if (data[j][0] === data2[j][0]) {
    //       // console.log("statName: " + data[j][0]);
    //       // console.log("statValues: ", "p1 :" + data[j][1], "p2: " + data2[j][1]);
    //       let statValue = data[j][1];
    //       let statValue2 = data2[j][1];
    //       // this.setState({chartData[0].y = statValue});
    //       // chartData[1].y = statValue2;
    //       console.log("statName: " + data[j][0]);
    //       // console.log("chartData...", chartData);
    //
    //       // return stuff;
    //     }
    //     let statValue = data[j][1];
    //     let statValue2 = data2[j][1]
    //     stuff[0].y = statValue;
    //     stuff[1].y = statValue2;
    //     console.log("STUFF", "for char: " + name, ", stat name: " + data[j][0] , stuff);
    //   }
    // }
    // console.log("STUFF!", stuff);
  };

  // breakItDown = (stats) => {
  // // console.log(Object.entries(stats)[0][0])
  //     for (let i = 0; i < Object.entries(stats).length; i++) {
  //       let name = Object.entries(stats)[i][0];
  //       let data = Object.entries(Object.entries(stats)[i][1]).sort();
  //       console.log("character: ", name);
  //       for (let j=0; j < data.length; j++) {
  //         console.log("stat name: ", data[j][0]);
  //         console.log("stat value: ", data[j][1]);
  //       }
  //     }
  // }

  fetchFirstPlayer() {
    let player1 = this.state.player1;
    if (player1.length > 1) {
      let apiURL1 = "https://owapi.net/api/v3/u/" + player1 + "/heroes";
      let dataGrab1 = response => {
        this.setState({ compare1: [response.us.heroes] });
      };
      return fetch(apiURL1)
        .then(response => response.json())
        .then(dataGrab1)
        .catch();
    }
  }

  fetchSecondPlayer() {
    let player2 = this.state.player2;
    if (player2.length > 1) {
      let apiURL2 = "https://owapi.net/api/v3/u/" + player2 + "/heroes";
      let dataGrab2 = response => {
        this.setState({ compare2: [response.us.heroes] });
      };
      return fetch(apiURL2)
        .then(response => response.json())
        .then(dataGrab2)
        .catch();
    }
  }

  handleChange(event) {
    let targetField = event.target.name;
    if (targetField === "player1") {
      if (/^[aA-zZ0-9-]+$/g.test(event.target.value)) {
        this.setState({ player1: event.target.value });
      } else {
        console.log(
          "INVALID FORMAT: Only use letters, separated by -, followed by numbers"
        );
      }
    } else if (targetField === "player2") {
      if (/^[aA-zZ0-9-]+$/g.test(event.target.value)) {
        this.setState({ player2: event.target.value });
      } else {
        console.log(
          "INVALID FORMAT: Only use letters, separated by -, followed by numbers"
        );
      }
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.player1.length > 5 && this.state.player2.length > 5) {
      console.log("submit occured");
      // document.getElementById("submit").setAttribute("disabled", "true");
      // document.querySelector(".input-section").classList.add("compare-shrink");
      document.querySelector(".input-form").classList.add("hidden");
      let compareBtn = document.getElementById("compare-btn");
      compareBtn.value = "SHOW";
      clickCount++;
      event.target.reset();
      this.setState({ isMounted: "inline-block"});
      this.fetchFirstPlayer()
        .then(() => {
          setTimeout(() => {
            return this.fetchSecondPlayer().then(this.findMatches);
          }, 1001);
        })
    }
  };

  handleClick(event) {
    console.log(event.target, "targetttt");
      if (event.target.value === "HIDE") {
        event.target.value = (clickCount % 2 === 0) ? "SHOW" : "HIDE";
        clickCount++;
        document.querySelector(".input-form").classList.toggle("hidden");
      } else {
        event.target.value = (clickCount % 2 === 0) ? "SHOW" : "HIDE";
        clickCount++;
        document.querySelector(".input-form").classList.toggle("hidden");
      }
  }

  renderCompare() {
    if (this.state.competitiveStats2) {
      return (
        <Compare userAgent={window.navigator.userAgent} data={ [this.state.matchedData, this.state.competitiveStats1, this.state.competitiveStats2] } firstplayer={this.state.competitveStats1} secondplayer={this.state.competitveStats2} />
      )
    } else if (!this.state.competitiveStats2) {
      return (
        <MDSpinner className="spinner-widget"
                   style={{display: this.state.isMounted}}
                   size={200}
                   singleColor="#25BEFC"
        />
      )
    } else {
      return (
        <h2>Sorry, matches could not be found</h2>
      )
    }
  }

  componentWillMount() {
    this.setState({ isMounted: "inline-block"})
  };

  componentDidMount() {
    this.setState({ isMounted: "none"})
  };

  render() {
    return (
      <div className="App">
        <Header />
        <InputForm
          data1={this.findMatches}
          data2={this.state.compare2}
          disabled={!this.buttonEnabled}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          onClick={this.handleClick}
        />
        <AddPlayer />
        {this.renderCompare()}
        <Footer />
      </div>
    );
  }
}

export default App;
