import React, { Component } from "react";

export class Show extends Component {
  render() {
    return (
      <div>
        <h1>Logs Show Page</h1>
        Title: {this.props.log.title} <br />
        Entry: {this.props.log.entry} <br />
        Created At: {this.props.log.createdAt.toLocaleString()}
        <br />
        Updated At: {this.props.log.updatedAt.toLocaleString()} <br />
        shipIsBroken? {this.props.log.shipIsBroken ? "true" : "false"} <br />
        <button>
          <a href="/logs">All Logs</a>
        </button>
      </div>
    );
  }
}

module.exports = Show;
