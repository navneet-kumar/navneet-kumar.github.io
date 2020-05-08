import React, { Component } from "react";
import styled, { css } from "styled-components";
import { GoThreeBars, GoX } from "react-icons/go";
import { Link } from "react-router-dom";
import device from "../utils/device";
import { menuItems } from "../data/siteConfig";

/************* Style **************/
const HeaderWrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  width: 100%;
  z-index: 3;
`;

const Menu = styled.ol`
  clear: both;
  max-height: 0;
  transition: max-height 0.2s ease-out;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  background-color: ${(props) => props.theme.backgroundColor};

  @media ${device.tablet} {
    clear: none;
    max-height: none;
    padding: 0.5em 0.5em;
  }

  ${(props) =>
    props.expanded &&
    css`
      max-height: 10%;
    `};
`;

const MenuItem = styled.li`
  display: block;
  padding: 0.5em 0.5em;
  border-right: 1px solid ${(props) => props.theme.foregroundColor};
  text-align: center;
  text-decoration: none;
  color: ${(props) => props.theme.foregroundColor};

  @media ${device.tablet} {
    float: right;
    padding: 0.5em 2.5em;
  }
`;

const MenuIcon = styled.div`
  float: left;
  padding: 0.3em;
  color: ${(props) => props.theme.foregroundColor};
  :hover {
    cursor: pointer;
  }
  @media ${device.tablet} {
    display: none;
  }
`;
/************* Style **************/

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { showMenuItems: false };
  }

  toggleMenu() {
    this.setState({ showMenuItems: !this.state.showMenuItems });
  }

  render() {
    return (
      <HeaderWrapper>
        <MenuIcon onClick={() => this.toggleMenu()}>
          {this.state.showMenuItems ? (
            <GoX size={"2em"} />
          ) : (
            <GoThreeBars size={"2em"} />
          )}
        </MenuIcon>
        <Menu expanded={this.state.showMenuItems}>
          {menuItems.map((element, index) => (
            <MenuItem key={index}>
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to={element.path}
              >
                {element.name}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </HeaderWrapper>
    );
  }
}

export default Header;
