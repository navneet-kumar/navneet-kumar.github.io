import React from "react";
import Page from "./page";
import styled from "styled-components";
import { profile } from "../data/siteConfig";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaStackOverflow,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Center = styled.div`
  padding: 3%;
  text-align: center;
  color: ${(props) => props.theme.backgroundColor};
`;

const List = styled.ul`
  list-style: none;
  padding: 2em;
  margin: 0;
`;

const ListItem = styled.li`
  text-align: center;
  padding: 0.8em;
`;

const Text = styled.h1`
  margin: 0;
`;

const IconContext = styled.div`
  color: inherit;
  height: 3em;
  transition: height 0.4s;
  :hover {
    height: 5em;
  }
`;

const GetIcon = (props) => {
  let icons = {
    email: [
      <GrMail style={{ width: "inherit", height: "inherit" }} />,
      "#D44638",
    ],
    github: [
      <FaGithub style={{ width: "inherit", height: "inherit" }} />,
      "#000",
    ],
    linkedin: [
      <FaLinkedin style={{ width: "inherit", height: "inherit" }} />,
      "#0077b5",
    ],
    twitter: [
      <FaTwitter style={{ width: "inherit", height: "inherit" }} />,
      "#00acee",
    ],
    stackOverflow: [
      <FaStackOverflow style={{ width: "inherit", height: "inherit" }} />,
      "#ef8236",
    ],
  };
  let icon = icons[props.for];

  return (
    <a
      style={{ color: icon[1] }}
      target="_blank"
      rel="noopener noreferrer"
      href={profile.socialPresence[props.for]}
    >
      <IconContext>{icon[0]}</IconContext>
    </a>
  );
};

const Contact = () => {
  return (
    <Page
      content={
        <Center>
          <Text>Let's get in touch... </Text>
          <List>
            <ListItem>
              <GetIcon for="email" />
            </ListItem>
            <ListItem>
              <GetIcon for="github" />
            </ListItem>
            <ListItem>
              <GetIcon for="linkedin" />
            </ListItem>
            <ListItem>
              <GetIcon for="twitter" />
            </ListItem>
            <ListItem>
              <GetIcon for="stackOverflow" />
            </ListItem>
          </List>
        </Center>
      }
    />
  );
};

export default Contact;
