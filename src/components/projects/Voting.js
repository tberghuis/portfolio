import React, { Component } from "react";
import Project from "./Project";

class Voting extends Component {
  render() {
    let heading = <h1>Voting App</h1>;
    let image = (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://fcc-voting-redux.tomberghuis.com"
      >
        <img src="/projects/fcc-voting-redux.tomberghuis.com.png" alt="" />
      </a>
    );
    let description = (
      <div>
        <p>
          This app allows users to create "Polls" with multiple options that can
          be shared and voted on by other users.
        </p>
        <p>
          <strong>Built with:</strong> React, Redux, React Router, Semantic UI,
          Express, Mongoose, Passport, JWT<br />
          <strong>link:</strong>{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://fcc-voting-redux.tomberghuis.com"
          >
            http://fcc-voting-redux.tomberghuis.com
          </a>
          <br />
          <strong>github:</strong>{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/tberghuis/fcc-voting-redux"
          >
            https://github.com/tberghuis/fcc-voting-redux
          </a>
        </p>
      </div>
    );
    return (
      <Project heading={heading} image={image} description={description} />
    );
  }
}

export default Voting;
