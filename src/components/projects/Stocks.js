import React, { Component } from "react";
import Project from "./Project";

class Stocks extends Component {
  render() {
    let heading = <h1>Stock Charts</h1>;
    let image = (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://fcc-stocks.tomberghuis.com"
      >
        <img src="/projects/fcc-stocks.tomberghuis.com.png" alt="" />
      </a>
    );
    let description = (
      <div>
        <p>
          This app creates a comparison chart of stocks that are added by users.
          Data is synced between all users in realtime using socket.io.
        </p>
        <p>
          <strong>Built with:</strong> React, Redux, Highcharts, Express,
          Socket.io, Yahoo Finance API<br />
          <strong>link:</strong>{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://fcc-stocks.tomberghuis.com"
          >
            http://fcc-stocks.tomberghuis.com
          </a>
          <br />
          <strong>github:</strong>{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/tberghuis/fcc-stocks"
          >
            https://github.com/tberghuis/fcc-stocks
          </a>
        </p>
      </div>
    );
    return (
      <Project heading={heading} image={image} description={description} />
    );
  }
}

export default Stocks;
