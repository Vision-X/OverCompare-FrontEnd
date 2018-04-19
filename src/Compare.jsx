import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import BarChart from "react-svg-bar-chart";

const barData = [{ x: 2, y: 3 }, { x: 6, y: 4 }];
const charImages = [{ana: "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E000000000013B.png"},
                    {bastion: "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000015.png"},
                    {brigitte: "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000195.png"},
                    {doomfist: "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E000000000012F.png"},
                    {dva: "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E000000000007A.png"},
                    {genji: "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000029.png"},
                    {hanzo: "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000005.png"},
                    {junkrat: "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000065.png"},
                    {lucio: "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000079.png"},
                    {mccree: "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000042.png"},
                    {mei: "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E00000000000DD.png"},
                    {mercy: "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000004.png"},
                    {moira: "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E00000000001A2.png"},
                    {orisa: "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E000000000013E.png"},
                    {pharah: "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000008.png"},
                    {reaper: "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000002.png"},
                    {roadhog: "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000040.png"},
                    {reinhardt: "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000007.png"},
                    {soldier76: "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E000000000006E.png"},
                    {sombra: "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E000000000012E.png"},
                    {symmetra: "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000016.png"},
                    {torbjorn: "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000006.png"},
                    {tracer: "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000003.png"},
                    {widowmaker: "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E000000000000A.png"},
                    {winston: "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000009.png"},
                    {zarya: "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000068.png"},
                    {zenyatta: "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000020.png"}
                   ]

class Compare extends Component {
  componentDidMount() {}

  render() {
    return (
      <section className="hidden" id="compare-section">
        <h3>MATCHED CHARACTERS</h3>
        <Tabs>
          <TabList>
            {this.props.data
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
                        console.log(name), "name!!!!";
                        console.log(currVal, "currVal");
                        if (Object.keys(currVal)[0] === name) {
                          console.log(Object.values(currVal), "YOLO BOIIII");
                          acc = Object.values(currVal)[0];
                        }
                        console.log(acc, "acc");
                        return acc;
                      }, "")
                    }
                    />
                    {name.toUpperCase()}
                  </Tab>
                );
              })}
          </TabList>
          {this.props.data.map(character => {
            return (
              <TabPanel>
                <h4>{character}</h4>
                <BarChart data={barData} />
              </TabPanel>
            );
          })}
        </Tabs>
      </section>
    );
  }
}

export { Compare };
