import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import styled from "styled-components";
import Scroll from "react-scroll";

const Link = Scroll.Helpers.Scroll(NavLink);

const MenuWrapper = styled.div`
  .navbar-collapse {
    text-align: right;
  }
  .navbar {
    background-color: lightgrey;
  }
  img {
    height: 35px;
  }
  .navbar-brand {
    margin-right: auto;
    cursor: pointer;
  }
  .nav-link {
    cursor: pointer;
  }
`;

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  closeCollapse = () => {
    if (this.state.isOpen) {
      this.setState({
        isOpen: false
      });
    }
  };

  render() {
    return (
      <MenuWrapper>
        <Navbar fixed="top" light color="faded" toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand onClick={this.props.scrollToTop}>
            <img src="/logo.png" alt="" />
          </NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link
                  onClick={this.closeCollapse}
                  activeClass="active"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Portfolio
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  onClick={this.closeCollapse}
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Contact
                </Link>
              </NavItem>
              <NavItem>
                <NavLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/tberghuis/portfolio"
                >
                  Github
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </MenuWrapper>
    );
  }
}

export default Menu;
