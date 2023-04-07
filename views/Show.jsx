import React, { Component } from "react";

export class Show extends Component {
  render() {
    return (
      <div>
        <h1>Logs Show Page</h1>
        {this.props.log.title} <br />
        {this.props.log.entry} <br />
        {/* {this.props.log.timestamps} <br /> */}
        {this.props.log.shipIsBroken ? "true" : "false"} <br />
        <button>
          <a href="/logs">All Logs</a>
        </button>
      </div>
    );
  }
}

module.exports = Show;
