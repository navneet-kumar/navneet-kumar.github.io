import React, { Component } from "react";
import styled from 'styled-components';

const RoundImage = styled.div`
    width: 50%;
    height: 30%;
    background: black;
    border-radius: 50%;
  `;

export default class profilePic extends Component {
  render() {
    return (
      <RoundImage>
        {/* <img
          src="https://avatars3.githubusercontent.com/u/19570353?s=460&u=e2233907af14b402096589062455e0214248b258&v=4"
          alt="profile"
        /> */}
      </RoundImage>
    );
  }
}
