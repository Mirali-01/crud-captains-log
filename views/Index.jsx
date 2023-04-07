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
              <div key={i}>
                <li>
                  <a href={`/logs/${log.id}`}>{log.title}</a>
                </li>
                <br />
                <button>
                  <a href={`/logs/${log._id}/edit`}>EDIT</a>
                </button>
                <br />
                <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                  <input type="submit" value="DELETE" />
                </form>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
