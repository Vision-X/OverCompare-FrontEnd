import React, { Component } from 'react';

class AddPlayer extends Component {
  render() {
    return (
      <section className="hidden" id="add-player">
        <label>Add a player</label>
        <input id="add-player-btn" type="submit" value="Add Player"/>
      </section>
    )
  }
}

export { AddPlayer };
