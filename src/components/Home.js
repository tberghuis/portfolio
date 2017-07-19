import React, { Component } from "react";

import styled from "styled-components";
import Scroll from "react-scroll";

var Link = Scroll.Link;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  img {
    height: 200px;
    border-radius: 50%;
  }

  position: relative;
  .portfolio-link {
    position: absolute;
    bottom: 0;
    width: 100%;
    a {
      cursor: pointer;
      display: inline-block;
    }
  }
`;

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <div>
          <img src="/portrait-2.jpg" alt="" />

          <h1>Tom Berghuis</h1>
          <p>Aspiring fullstack Javascript developer</p>
        </div>
        <div className="portfolio-link">
          <Link to="portfolio" smooth={true} duration={500}>
            <span>Portfolio</span>
            <br />
            <i className="fa fa-chevron-down" aria-hidden="true" />
          </Link>
        </div>
      </HomeWrapper>
    );
  }
}

export default Home;
