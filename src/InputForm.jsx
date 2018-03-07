import React, { Component } from 'react';

class InputForm extends Component {
  render() {
    return (
      <section onSubmit={this.props.handleSubmit} className="input-form">
        <form onSubmit={this.props.handleSubmit}>
          <label>Enter a battletag</label>
          <input onChange={this.props.handleChange} id="input-name" name="player1" type="text" placeholder="ex. KobraKai-1456"/>
          <label>Compare to...</label>
          <input onChange={this.props.handleChange} id="compare-to" name="player2" type="text" placeholder="ex. MiagiDo-90911"/>
          <input id="submit" type="submit" value="Compare" />
        </form>
      </section>
    )
  }
}

export { InputForm };
