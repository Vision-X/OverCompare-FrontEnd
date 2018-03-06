import React, { Component } from 'react';

class AddPlayer extends Component {
  render() {
    return (
      <section id="add-player">
        <label>Add a player</label>
        <input id="add-player-btn" type="submit" value="Submit"/>
      </section>
    )
  }
}

export { AddPlayer };
