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
      isMounted: "none",
      showOrHide: "HIDE",
      players: false,
      p1fetch: "",
      p2fetch: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderCompare = this.renderCompare.bind(this);
  }

  get buttonEnabled() {
    return this.state.players;
  }

  get buttonDisabled() {
    return "false";
  }

  // get dataIsThere() {
  //   if (this.state.player1.length > 0 && this.state.player2.length > 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  findMatches = () => {
    let stuff = [{ x: 2, y: 0 }, { x: 2, y: 0 }];
    let comp1 = this.state.compare1[0].stats.competitive;
    let comp2 = this.state.compare2[0].stats.competitive;
    let charArray = [];
    let stats = {};
    let stats2 = {};
    for (let character in comp1) {
      if (comp2.hasOwnProperty(character)) {
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

  };

  fetchFirstPlayer() {
    let player1 = this.state.p1fetch;
    if (player1.length > 1) {
      let apiURL1 = "https://owapi.net/api/v3/u/" + player1 + "/heroes";
      let dataGrab1 = response => {
        this.setState({
                        compare1: [response.us.heroes],
                        player1: this.state.p1fetch,
                        p1fetch: ""
                      })
      };
      return fetch(apiURL1)
        .then(response => response.json())
        .then(dataGrab1)
        .catch();
    }
  };

  fetchSecondPlayer() {
    let player2 = this.state.p2fetch;
    if (player2.length > 1) {
      let apiURL2 = "https://owapi.net/api/v3/u/" + player2 + "/heroes";
      let dataGrab2 = response => {
        this.setState({
                        compare2: [response.us.heroes],
                        player2: this.state.p2fetch,
                        p2fetch: ""
                      })
      };
      return fetch(apiURL2)
        .then(response => response.json())
        .then(dataGrab2)
        .catch();
    }
  };

  handleChange = (event) => {
    let targetField = event.target.name;
      if (targetField === "player1") {
        if (/^[aA-zZ0-9-]+$/g.test(event.target.value)) {
          this.setState({ p1fetch: event.target.value });
        }
      } else if (targetField === "player2") {
        if (/^[aA-zZ0-9-]+$/g.test(event.target.value)) {
          this.setState({ p2fetch: event.target.value });
          // this.setState({ players: true })
        }
      } else {
      console.log(
        "INVALID FORMAT: Only use letters, separated by -, followed by numbers"
      );
    }
  if (this.state.p1fetch.length && this.state.p2fetch.length) {
      this.setState({ players: true })
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    // this.handleChange(event)
    console.log(this.form);
    console.log(this);
    console.log(event.target.children);
    // console.log((this.children);
    // if (this.state.player1.length && this.state.player2.length) {
      // this.setState({ players: true })
    // }
    this.setState({ submit: true, competitveStats2: "", competitiveStats1: "" })
    // if (this.state.players) {
      console.log("submit occured");
      // document.getElementById("submit").setAttribute("disabled", "true");
      // document.querySelector(".input-section").classList.add("compare-shrink");
      document.querySelector(".input-form").classList.add("hidden");
      let compareBtn = document.getElementById("compare-btn");
      this.setState({ showOrHide: "SHOW"})
      event.target.reset();
      this.setState({ isMounted: "inline-block"});
      this.fetchFirstPlayer()
        .then(() => {
          setTimeout(() => {
            return this.fetchSecondPlayer().then(this.findMatches);
          }, 1001);
        })
    // }
    // this.setState({ submit: false });
    // }
  }

  handleClick(event) {
    // console.log(event.target, "targetttt");
      if (event.target.value === "HIDE") {
        this.setState({ showOrHide: "SHOW"})
        document.querySelector(".input-form").classList.toggle("hidden");
      } else {
        this.setState({ showOrHide: "HIDE"})
        document.querySelector(".input-form").classList.toggle("hidden");
      }
  };

  renderCompare() {
    if (this.state.competitiveStats2) {
      return (
        <Compare userAgent={window.navigator.userAgent}
                 data={[
                        this.state.matchedData,
                        this.state.competitiveStats1,
                        this.state.competitiveStats2
                      ]}
                 names={[this.state.player1, this.state.player2]}
                 firstplayer={this.state.competitveStats1}
                 secondplayer={this.state.competitveStats2}
        />
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
  };

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
          showOrHide={this.state.showOrHide}
        />
        <AddPlayer />
        {this.renderCompare()}
        <Footer />
      </div>
    );
  }
};

export default App;
