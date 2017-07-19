import React, { Component } from "react";

import styled from "styled-components";
import Scroll from "react-scroll";

var Link = Scroll.Link;

const ContactWrapper = styled.div`
  text-align: center;
  position: relative;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    margin-bottom: 20px;
  }
  .contact-links {
    display: inline-block;
    text-align: left;
    font-size: 1.2rem;
    a {
      color: inherit;
      text-decoration: inherit;
    }
    i {
      margin-right: 8px;
    }
  }
  .scroll-link {
    width: 100%;
    position: absolute;
    bottom: 0;
    text-align: center;
    a {
      cursor: pointer;
    }
  }
`;

class Contact extends Component {
  render() {
    return (
      <ContactWrapper>
        <h1>Contact</h1>
        <div>
          <div className="contact-links">
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:thomas.berghuis@gmail.com"
              >
                <i className="fa fa-envelope fa-lg" aria-hidden="true" />
                thomas.berghuis@gmail.com
              </a>
            </p>
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/tom_berghuis"
              >
                <i className="fa fa-twitter fa-lg" aria-hidden="true" />
                @tom_berghuis
              </a>
            </p>
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/tberghuis"
              >
                <i className="fa fa-github fa-lg" aria-hidden="true" />github
              </a>
            </p>
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://stackoverflow.com/users/95482/tom-berghuis?tab=profile"
              >
                <i className="fa fa-stack-overflow fa-lg" aria-hidden="true" />
                Stack Overflow
              </a>
            </p>
          </div>
        </div>
        <div className="scroll-link">
          <Link to="home" smooth={true} duration={500}>
            <i className="fa fa-chevron-up" aria-hidden="true" />
            <br />
            <span>Top</span>
          </Link>
        </div>
      </ContactWrapper>
    );
  }
}

export default Contact;
