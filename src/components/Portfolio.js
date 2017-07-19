import React, { Component } from "react";
import styled from "styled-components";
import Scroll from "react-scroll";

import PinterestClone from "./projects/PinterestClone";
import Voting from "./projects/Voting";
import Stocks from "./projects/Stocks";

const Link = Scroll.Link;

const PortfolioWrapper = styled.div`
  padding-top: 73px;
  padding-bottom: 60px;
  > div {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
  min-height: 100vh;
  position: relative;
`;

const LinkWrapper = styled.div`
  text-align: center;
  a {
    cursor: pointer;
    display: inline-block;
  }
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

class Portfolio extends Component {
  render() {
    return (
      <PortfolioWrapper>
        <PinterestClone />
        <Stocks />
        <Voting />
        <LinkWrapper>
          <Link to="contact" smooth={true} duration={500}>
            <span>Contact</span>
            <br />
            <i className="fa fa-chevron-down" aria-hidden="true" />
          </Link>
        </LinkWrapper>
      </PortfolioWrapper>
    );
  }
}

export default Portfolio;
