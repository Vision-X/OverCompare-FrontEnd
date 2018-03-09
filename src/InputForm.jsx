import React, { Component } from 'react';
// import Anime from 'react-anime';

class InputForm extends Component {
  render() {
    return (
        <section className="input-form">
          <form onSubmit={this.props.handleSubmit}>
            {this.findMatches}
            <label>Enter a battletag</label>
            <input onChange={this.props.handleChange} id="input-name" name="player1" ref="player1 "type="text" placeholder="ex. KobraKai-1456"/>
            <label>Compare to...</label>
            <input onChange={this.props.handleChange} id="compare-to" name="player2" ref="player2" type="text" placeholder="ex. MiagiDo-90911"/>
            <input id="submit" type="submit" name="submit" value="Go!" disabled={this.props.disabled} toggle={this.props.buttonEnableToggle} />
          </form>
        </section>
    )
  }
}

export { InputForm };
