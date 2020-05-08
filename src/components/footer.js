import React, { Component } from "react";
import styled from "styled-components";

const WrapperFooter = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 3;
  text-align: center;
  padding: 0.2em 0 0.2em 0;
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
