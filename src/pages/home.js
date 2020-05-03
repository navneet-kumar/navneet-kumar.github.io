import React from "react";
import Page from "./page";
import styled from "styled-components";
import device from "../utils/device";
import { profile } from "../data/siteConfig";

const Wrapper = styled.div`
  padding: 2em;
  text-align: center;
`;

const Image = styled.img`
  margin: auto;
  width: 50%;
  height: 70%;
  border-radius: 50%;
  -webkit-filter: drop-shadow(5px 5px 5px #222222);
  filter: drop-shadow(5px 5px 5px #222222);

  @media ${device.tablet} {
    float: left;
    width: 30%;
    height: 30%;
    margin-left: 10%;
  }
`;

const WelcomeText = styled.h2`
  text-align: center;
  padding: 2em;

  @media ${device.tablet} {
    float: left;
    text-align: left;
    width: 50%;
  }
`;

const Home = () => {
  return (
    <Page
      content={
        <Wrapper>
          <Image
            src={profile.profilePic}
            alt={profile.name + " | " + profile.profession}
          />
          <WelcomeText>{profile.description}</WelcomeText>
        </Wrapper>
      }
    />
  );
};

export default Home;
