import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import BarChart from "react-svg-bar-chart";

const charImages = [
  {
    ana:
      "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E000000000013B.png"
  },
  {
    bastion:
      "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000015.png"
  },
  {
    brigitte:
      "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000195.png"
  },
  {
    doomfist:
      "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E000000000012F.png"
  },
  {
    dva:
      "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E000000000007A.png"
  },
  {
    genji:
      "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000029.png"
  },
  {
    hanzo:
      "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000005.png"
  },
  {
    junkrat:
      "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000065.png"
  },
  {
    lucio:
      "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000079.png"
  },
  {
    mccree:
      "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000042.png"
  },
  {
    mei:
      "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E00000000000DD.png"
  },
  {
    mercy:
      "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000004.png"
  },
  {
    moira:
      "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E00000000001A2.png"
  },
  {
    orisa:
      "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E000000000013E.png"
  },
  {
    pharah:
      "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000008.png"
  },
  {
    reaper:
      "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000002.png"
  },
  {
    roadhog:
      "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000040.png"
  },
  {
    reinhardt:
      "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000007.png"
  },
  {
    soldier76:
      "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E000000000006E.png"
  },
  {
    sombra:
      "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E000000000012E.png"
  },
  {
    symmetra:
      "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000016.png"
  },
  {
    torbjorn:
      "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000006.png"
  },
  {
    tracer:
      "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000003.png"
  },
  {
    widowmaker:
      "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E000000000000A.png"
  },
  {
    winston:
      "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000009.png"
  },
  {
    zarya:
      "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000068.png"
  },
  {
    zenyatta:
      "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000020.png"
  }
];

class Compare extends Component {
  constructor() {
    super();
  }

  sortData() {
    let compStats1 = this.props.data[1];
    let compStats2 = this.props.data[2];
    console.log(compStats1, compStats2);
    let statSpecific = {};
    for (var key in compStats1) {
      if (compStats2.hasOwnProperty(key)) {
        console.log("char name__________________ ", key);
        for (var prop in compStats2[key]) {
          if (compStats1[key][prop]) {
            console.log("prop", prop);
            console.log(compStats1[key][prop]);
            console.log(compStats2[key][prop]);
          }
        }
      }
      // console.log("statSpecific arrays", statSpecific);
    }
  };

  thoseStats(charname) {
    let compStats1 = this.props.data[1];
    let compStats2 = this.props.data[2];
    if (compStats1.hasOwnProperty(charname) && compStats2.hasOwnProperty(charname)) {
      for (var prop in compStats1[charname]) {
        let category = prop;
        let statValue1 = compStats1[charname][prop];
        let statValue2 = compStats2[charname][prop];
        this.mockDisplay(category, statValue1, statValue2);
      }
    }
  }

  mockDisplay(category, statValue1, statValue2) {
    console.log("mockDisplay ........");
    console.log("cat : ", category);
    console.log("sv1 : ", statValue1);
    console.log("sv2 : ", statValue2);
    let player1 = this.props.names[0];
    let player2 = this.props.names[1];
    return (
      <div>
        <h3>{category}</h3>
        <p>{player1}: {statValue1}</p>
        <p>{player2}: {statValue2}</p>
      </div>
    )
  };

  statsByCategory() {};

  componentDidMount() {};

  render() {
    return (
      <section id="compare-section">
        <h3>MATCHED CHARACTERS</h3>
        <Tabs>
          <TabList>
            {this.props.data[0]
              .sort(function(a, b) {
                if (a < b) return -1;
                if (a > b) return 1;
                return 0;
              })
              .map(name => {
                return (
                  <Tab>
                    <img
                      className="character-image"
                      src={charImages.reduce(function(acc, currVal, index) {
                        if (Object.keys(currVal)[0] === name) {
                          acc = Object.values(currVal)[0];
                        }
                        return acc;
                      }, "")}
                    />
                    {name.toUpperCase()}
                  </Tab>
                );
              })}
          </TabList>
          {this.props.data[0].map(character => {
            // this.sortData();
            console.log(character, "character");
            // console.log(this.sortData());
            // let barData = [{ x: 2, y: 3 }, { x: 2, y: 4 }];
            var nodes = [];
            var category;
            var statValue1;
            var statValue2;
            let compStats1 = this.props.data[1];
            let compStats2 = this.props.data[2];
            if (compStats1.hasOwnProperty(character) && compStats2.hasOwnProperty(character)) {
              for (var prop in compStats1[character]) {
                category = prop.replace(/_/g, ' ');
                (compStats1[character][prop] === undefined)
                              ? statValue1 = "0"
                              : statValue1 = compStats1[character][prop];
                (compStats2[character][prop] === undefined)
                              ? statValue2 = "0"
                              : statValue2 = compStats2[character][prop];
                nodes.push(this.mockDisplay(category, statValue1, statValue2));
              }
            }
            // Nishik-1477
            return (
              <TabPanel>
                <h4>{character}</h4>
                {nodes}
                {/*{this.mockDisplay(category, statValue1, statValue2)}*/}
                {/*<div>
                  <p>{category}</p>
                  <p>player 1: {statValue1}</p>
                  <p>player 2: {statValue2}</p>
                </div>*/}
                {/*<BarChart data={this.props.data2} data1={this.props.data3} />*/}
              </TabPanel>
            );
          })}
        </Tabs>
      </section>
    );
  }
}

export { Compare };
