import React, { Component } from 'react';

class Compare extends Component {
  render() {
    return (
      <section className="hidden" id="compare-section">
        <h3>Matched Characters</h3>
        <div>
            {this.props.data.map(name => {
                return <button type='button'>{name}</button>
              })
            }
        </div>
      </section>
    )
  }
}

export { Compare };
