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
    let objkeys = Object.keys(compStats1);
    let objvals = Object.values(compStats1);
    let objkeys2 = Object.keys(compStats2);
    let objvals2 = Object.values(compStats2);
    let statsBundle = [];
    let statSpecific = [];
    for (var prop in compStats1) {
      if (compStats2.hasOwnProperty(prop)) {
        // let keys1 = Object.keys(compStats1[prop]);
        // let deeper1 = Object.values(keys1);
        // let keys2 = Object.keys(compStats2[prop]);
        // let deeper2 = Object.values(keys2);
        // let stats1 = Object.keys(deeper1);
        // deeper1.sort();
        // deeper2.sort();
        // console.log("__________________________")
        console.log("char name__________________ ", prop);
        for (var key in compStats1[prop]) {
          console.log("compStats1[prop]-----", compStats1[prop]);
          if (compStats2[prop].hasOwnProperty(key)) {
            // console.log("hiiiii")
            console.log("char-:  ", prop);
            console.log("key--:  ", key);
            // console.log("value:  ", compStats2[prop][key])
            // console.log("value2: ", compStats1[prop][key])
            console.log(Object.keys(compStats1[prop])[key]);
            console.log(Object.values(compStats2[prop]));
            // console.log(compStats2[key])
            statsBundle.push(prop);
            statsBundle.push(key);
            // statSpecific.push(compStats1[prop]);
            statsBundle.push(compStats1[prop][key]);
            statsBundle.push(compStats2[prop][key]);
            statSpecific.push(statsBundle);
            console.log(statSpecific);
          }
        }
        // console.log(deeper1, "deeper1 ________________");
        // console.log(deeper2, "deeper2 ________________");
        // console.log(typeof deeper1)
      }
      // console.log("statSpecific arrays", statSpecific);
      return statSpecific;
    }
  }

  statsByCategory() {}

  componentWillMount() {}

  componentDidMount() {}

  render() {
    {
      console.log(this.props, "props");
    }
    {
      console.log(this.props.data[1], "firstplayer");
    }
    {
      console.log(this.props.data[2], "secondplayer");
    }
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
            console.log(this.sortData());
            let barData = [{ x: 2, y: 3 }, { x: 2, y: 4 }];
            return (
              <TabPanel>
                <h4>{character}</h4>
                <BarChart data={this.props.data2} data1={this.props.data3} />
              </TabPanel>
            );
          })}
        </Tabs>
      </section>
    );
  }
}

export { Compare };
