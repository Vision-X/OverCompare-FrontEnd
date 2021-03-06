import React, { Component, Fragment } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import BarChart from "react-svg-bar-chart";
import MDSpinner from 'react-md-spinner';

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

  mockDisplay = (category, statValue1, statValue2) => {
    let player1 = this.props.names[0];
    let player2 = this.props.names[1];
    if (category.includes("most") || category.includes("best")) {
      let cat = category.includes("most") ? category.replace(/most/g, '- most')
                                          : category.replace(/best/g, '- best')
      category = cat;
    };
    return (
        <div className="square">
          <div className="stats">
            <p>{this.rmDash(player1)}: <span className={ (parseInt(statValue1) >= parseInt(statValue2)) ? "green" : "red" }>{statValue1}</span></p>
            <p>{this.rmDash(player2)}: <span className={ (parseInt(statValue1) >= parseInt(statValue2)) ? "red" : "green" }>{statValue2}</span></p>
          </div>
          <h2>{category}</h2>
        </div>
    )
  };

  rmDash = plyr => plyr.split('-')[0];

  toPercent = num => `${parseInt(num * 100)}%`;

  convertToHHMM = time => {
    var hrs = parseInt(Number(time));
    var min = Number.parseFloat((Number(time)-hrs) * 60).toFixed(0);
    if (hrs < 10) hrs = "0" + `${hrs}`;
    if (min < 10) min = "0" + `${min}`;
    return hrs+':'+min;
  };

  categoryMatching = (char, nodes) => {
    let category;
    let statValue1;
    let statValue2;
    let p1 = this.props.data[1];
    let p2 = this.props.data[2];
    let cs1;
    let cs2;
    let keysArray = [...Object.keys(p1[char]), ...Object.keys(p2[char])].sort();
    let sortedKeys = [ ...new Set(keysArray)];
    for (let i = 0; i < sortedKeys.length; i++) {
      cs1 = p1[char][sortedKeys[i]];
      cs2 = p2[char][sortedKeys[i]];
      category = sortedKeys[i].replace(/_/g, ' ');
      if (cs1 === undefined && cs2 !== undefined) {
          if (sortedKeys[i].includes("time")) {
            statValue1 = "00:00";
            statValue2 = this.convertToHHMM(cs2);
          } else if (sortedKeys[i].includes("accuracy") || sortedKeys[i].includes("percentage")) {
            statValue1 = `0%`;
            statValue2 = this.toPercent(cs2);
          } else {
            statValue1 = "0";
            statValue2 = cs2;
          }
      } else if (cs2 === undefined && cs1 !== undefined) {
          if (sortedKeys[i].includes("time")) {
            statValue2 = "00:00"
            statValue1 = this.convertToHHMM(cs1);
          } else if (sortedKeys[i].includes("accuracy") || sortedKeys[i].includes("percentage")) {
            statValue2 = `0%`;
            statValue1 = this.toPercent(cs1);
          } else {
            statValue2 = "0";
            statValue1 = cs1;
        }
      } else if (cs1 !== undefined && cs2 !== undefined) {
          if (sortedKeys[i].includes("time")) {
              statValue1 = this.convertToHHMM(cs1);
              statValue2 = this.convertToHHMM(cs2);
          } else if (sortedKeys[i].includes("accuracy") || sortedKeys[i].includes("percentage")) {
            statValue2 = this.toPercent(cs2);
            statValue1 = this.toPercent(cs1);
          } else {
            statValue1 = cs1;
            statValue2 = cs2;
          }
      } else {
        console.log("WHAT IN THE FUCK");
      }
      nodes.push(this.mockDisplay(category, statValue1, statValue2))
    }
  };

  conditonallyRender() {
    if (this.props.data[0] && this.props.data[1] && this.props.data[2]) {
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
              // let barData = [{ x: 2, y: 3 }, { x: 2, y: 4 }];
              var nodes = [];
              let compStats1 = this.props.data[1];
              let compStats2 = this.props.data[2];
              this.categoryMatching(character, nodes);
              // Nishik-1477
              return (
                <TabPanel>
                  <h4>{character}</h4>
                  {nodes}
                  {/*<BarChart data={this.props.data2} data1={this.props.data3} />*/}
                </TabPanel>
              );
            })}
          </Tabs>
        </section>
      );
    } else {
      return (
        <div>
        <MDSpinner className="spinner-widget"
                   style={{display: "inline-block"}}
                   size={200}
                   singleColor="#25BEFC"
        />
        </div>
      )
    }
  }

  componentDidMount() {
    console.log("MOUNTED");
  };

  render() {
    // return (
    //   <section id="compare-section">
    //     <h3>MATCHED CHARACTERS</h3>
    //     <Tabs>
    //       <TabList>
    //         {this.props.data[0]
    //           .sort(function(a, b) {
    //             if (a < b) return -1;
    //             if (a > b) return 1;
    //             return 0;
    //           })
    //           .map(name => {
    //             return (
    //               <Tab>
    //                 <img
    //                   className="character-image"
    //                   src={charImages.reduce(function(acc, currVal, index) {
    //                     if (Object.keys(currVal)[0] === name) {
    //                       acc = Object.values(currVal)[0];
    //                     }
    //                     return acc;
    //                   }, "")}
    //                 />
    //                 {name.toUpperCase()}
    //               </Tab>
    //             );
    //           })}
    //       </TabList>
    //       {this.props.data[0].map(character => {
    //         // console.log(character, "character");
    //         // let barData = [{ x: 2, y: 3 }, { x: 2, y: 4 }];
    //         var nodes = [];
    //         let compStats1 = this.props.data[1];
    //         let compStats2 = this.props.data[2];
    //         this.categoryMatching(character, nodes);
    //         // Nishik-1477
    //         return (
    //           <TabPanel>
    //             <h4>{character}</h4>
    //             {nodes}
    //             {/*<BarChart data={this.props.data2} data1={this.props.data3} />*/}
    //           </TabPanel>
    //         );
    //       })}
    //     </Tabs>
    //   </section>
    // );
    return (
      <Fragment>
        {this.conditonallyRender()}
      </Fragment>
    )
  }
}

export { Compare };
