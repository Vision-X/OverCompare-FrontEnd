import React, { Component } from 'react';

class InputForm extends Component {
  render() {
    return (
      <section className="input-form">
        <form>
          <label>Enter your battletag (ex. BillyBob#1234)</label>
          <input id="input-name" type="text" />
          <label>Compare to...</label>
          <input id="compare-to" type="text" />
          <input id="submit" type="submit" value="COMPARE!" />
        </form>
      </section>
    )
  }
}

export { InputForm };
