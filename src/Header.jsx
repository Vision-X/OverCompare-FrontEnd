import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>OVER<span id="compare">COMPARE</span></h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    )
  }
}

export { Header };
