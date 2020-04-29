import React, { Component } from "react";
import styled from "styled-components";

const WrapperFooter = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 90%;
  z-index: 3;
  text-align: center;
  padding: 0.5em 0 1em 0;
`;

const Text = styled.p`
  color: ${(props) => props.theme.foregroundColor};
`;

class Footer extends Component {
  render() {
    return (
      <WrapperFooter>
        <Text>
          A passionate engineer, with a goal to help society using technology !
        </Text>
      </WrapperFooter>
    );
  }
}

export default Footer;
