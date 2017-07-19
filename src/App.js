import React, { Component } from "react";
import Scroll from "react-scroll";
import { Container } from "reactstrap";

import Menu from "./components/Menu";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

class App extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  componentDidMount() {
    Events.scrollEvent.register("begin", function() {
      console.log("begin", arguments);
    });
    Events.scrollEvent.register("end", function() {
      console.log("end", arguments);
    });
    scrollSpy.update();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  render() {
    return (
      <div>
        <Menu scrollToTop={this.scrollToTop} />
        <Container fluid>
          <Element name="home">
            <Home />
          </Element>
          <Element name="portfolio">
            <Portfolio />
          </Element>
          <Element name="contact">
            <Contact />
          </Element>
        </Container>
      </div>
    );
  }
}

export default App;
