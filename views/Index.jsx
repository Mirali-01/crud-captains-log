import React, { Component } from "react";

export class Index extends Component {
  render() {
    return (
      <div>
        <h1>Logs Page</h1>
        <br />
        <nav>
          <a href="/logs/new">Create a New Log</a>
        </nav>
        <ul>
          {this.props.logs.map((log, i) => {
            return (
              <li key={i}>
                <a href={`/logs/${log.id}`}>{log.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
