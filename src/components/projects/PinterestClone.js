import React, { Component } from "react";
import Project from "./Project";

class PinterestClone extends Component {
  render() {
    let heading = <h1>Pinterest Clone</h1>;
    let image = (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://fcc-pinterest.tomberghuis.com"
      >
        <img src="/projects/fcc-pinterest.tomberghuis.com.png" alt="" />
      </a>
    );
    let description = (
      <div>
        <p>
          This project allows users to post "Pins" which is a link to an image
          plus a title. To post a Pin, users must be authenticated via their
          Twitter account. Users can like Pins and also delete Pins they
          themselves have posted.
        </p>
        <p>
          <strong>Built with:</strong> React, Redux, Semantic UI, Express,
          Mongoose, Passport<br />
          <strong>link:</strong>{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://fcc-pinterest.tomberghuis.com"
          >
            http://fcc-pinterest.tomberghuis.com
          </a>
          <br />
          <strong>github:</strong>{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/tberghuis/fcc-pinterest"
          >
            https://github.com/tberghuis/fcc-pinterest
          </a>
        </p>
      </div>
    );
    return (
      <Project heading={heading} image={image} description={description} />
    );
  }
}

export default PinterestClone;
