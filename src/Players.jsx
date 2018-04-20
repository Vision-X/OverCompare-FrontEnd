import React, { Component } from 'react';

class Players extends Component {
  render() {
    return (
      <section>
        <article id="top-pros">
          <ul>
            <li>Top Pro Name</li>
          </ul>
        </article>
        <article id="saved-players">
          <ul>
            <li>Saved Player Name</li>
          </ul>
        </article>
      </section>
    )
  };
}

export { Players };
