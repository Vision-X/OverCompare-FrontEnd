import React, { Component } from 'react';

class InputForm extends Component {
  render() {
    return (
      <section onSubmit={this.props.handleSubmit} className="input-form">
        <form onSubmit={this.props.handleSubmit}>
          <label>Enter your battletag (ex. BillyBob#1234)</label>
          <input onChange={this.props.handleChange} id="input-name" name="player1"type="text" />
          <label>Compare to...</label>
          <input onChange={this.props.handleChange} id="compare-to" name="player2" type="text" />
          <input id="submit" type="submit" value="COMPARE" />
        </form>
      </section>
    )
  }
}

export { InputForm };
