import React, { Component } from "react";
import styled from "styled-components";

const ProjectWrapper = styled.div`
  > div {
    padding: 10px;
    border: 1px solid #d8d8d8;
    margin-bottom: 16px;
  }
  img {
    width: 100%;
    border: 1px solid #d8d8d8;
    margin-bottom: 10px;
  }
  h1 {
    text-align: center;
  }
  .wide-display {
    display: none;
  }
  @media (min-width: 768px) {
    .narrow-display {
      display: none;
    }
    .wide-display {
      display: block;
      display: flex;
      align-items: center;
      > :first-child {
        margin-right: 10px;
        flex-basis: 40%;
      }
      > :last-child {
        flex-basis: 60%;
      }
      h1 {
        text-align: left;
      }
    }
  }
`;

class Project extends Component {
  render() {
    let { heading, image, description } = this.props;
    return (
      <ProjectWrapper>
        <div className="narrow-display">
          {heading}
          {image}
          {description}
        </div>
        <div className="wide-display">
          <div>
            {image}
          </div>
          <div>
            {heading}
            {description}
          </div>
        </div>
      </ProjectWrapper>
    );
  }
}

export default Project;
