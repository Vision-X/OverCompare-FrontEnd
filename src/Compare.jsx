import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import createPlotlyComponent from 'react-plotly.js/factory'
// import Plot from 'react-plotly.js';
const Plot = createPlotlyComponent(window.Plotly);

class Compare extends Component {
  componentDidMount() {
    window.Plotly.newPlot('plot', [{
      // x: this.props.compare1[0].stats.competitive.ana.general_stats.games_won,
      // y: this.props.compare2[0].stats.competitive.ana.general_stats.games_won,
      x: 2,
      y: 5,
      type: 'bar'
      }]
    )
  }

  render() {
    return (
      <section className="hidden" id="compare-section">
        <h3>Matched Characters</h3>
        <Tabs>
          <TabList>
            {this.props.data.map(name => {
                return <Tab>{name}</Tab>
              })
            }
          </TabList>
        </Tabs>
        <div id="plot"></div>

      </section>
    )
  }
}

export { Compare };
