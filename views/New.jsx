import React, { Component } from "react";

export class New extends Component {
  render() {
    return (
      <div>
        <h1>New Log Page</h1>
        <br />
        <form action="/logs" method="POST">
          Title: <input type="text" name="title" placeholder="" />
          <br />
          Entry: <input type="textarea" name="entry" placeholder="" />
          <br />
          Ship Is Broken? <input type="checkbox" name="shipIsBroken" />
          <br />
          <input type="submit" value="Submit" />
          <br />
        </form>
      </div>
    );
  }
}

module.exports = New;
