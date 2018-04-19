import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import BarChart from 'react-svg-bar-chart';

const barData = [{x: 2, y: 3}, {x: 6, y:4}];
function alphabetizeCharacters(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }


class Compare extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <section className="hidden" id="compare-section">
        <h3>Matched Characters</h3>
        <Tabs>
          <TabList>
            {this.props.data.sort(function(a, b) {
            alphabetizeCharacters(a,b);
            }).map(name => {
                return (<Tab>
                          <img className="character-image" src="https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E000000000006E.png" />
                        {name.toUpperCase()}
                        </Tab> )
              })
            }
          </TabList>
            {this.props.data.map(character => {
              return (
                <TabPanel>
                  <h4>{character}</h4>
                  <BarChart data={barData} />
                </TabPanel>
              )}
            )}
        </Tabs>

      </section>
    )
  }
}

export { Compare };
