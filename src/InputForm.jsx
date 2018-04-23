import React, { Component } from 'react';
// import Anime from 'react-anime';

class InputForm extends Component {
  render() {
    return (
        <section className="input-section">
          <form className="input-form" onSubmit={this.props.handleSubmit}>
            {this.findMatches}
            <label>ENTER BATTLETAG</label>
            <input onChange={this.props.handleChange} id="input-name" name="player1" ref="player1 "type="text" placeholder="ex. KobraKai-1456"/>
            <label>COMPARE TO</label>
            <input onChange={this.props.handleChange} id="compare-to" name="player2" ref="player2" type="text" placeholder="ex. MiagiDo-90911"/>
            <input id="submit" onClick={this.props.onClick} type="submit" name="submit" value="GO!" disabled={this.props.disabled} toggle={this.props.buttonEnableToggle} />
          </form>
          <div id="compare-mini" className="">
            <input id="compare-btn" onClick={this.props.onClick} type="button" name="compare" value="HIDE" />
          </div>
        </section>
    )
  }
}

export { InputForm };
