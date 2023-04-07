import React, { Component } from "react";

export class Edit extends Component {
  render() {
    return (
      <div>
        <h1>Log Edit Page</h1>
        <form action={`/logs/${this.props.log._id}?_method=PUT`} method="POST">
          Title:{" "}
          <input type="text" name="title" defaultValue={this.props.log.title} />
          <br />
          Entry:{" "}
          <input
            type="textarea"
            name="entry"
            defaultValue={this.props.log.entry}
          />
          <br />
          Ship Is Broken?{" "}
          {this.props.log.shipIsBroken ? (
            <input type="checkbox" name="shipIsBroken" defaultChecked />
          ) : (
            <input type="checkbox" name="shipIsBroken" />
          )}
          <br />
          <input type="submit" name="" value="Submit" />
          <br />
          <button>
            <a href="/logs">Log</a>
          </button>
        </form>
      </div>
    );
  }
}

module.exports = Edit;
