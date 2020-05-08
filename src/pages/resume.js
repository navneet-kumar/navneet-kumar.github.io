import React from "react";
import Page from "./page";
import styled from "styled-components";
import { profile, experience } from "../data/siteConfig";
import { GrMail, GrLocation } from "react-icons/gr";
import { FaMobileAlt, FaPassport } from "react-icons/fa";
import { age } from "../utils/helpers";
import moment from "moment";

const Wrapper = styled.div`
  padding: 1em;
`;

const BigHeading = styled.h1`
  margin: 0;
`;

const Heading = styled.h2`
  margin: 0;
`;

const SubHeading = styled.h3``;

const SmallHeading = styled.h5`
  margin: 0;
`;

const Text = styled.p``;

const UnorderedList = (props) => {
  return (
    <ul>
      {props.content.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

const Resume = () => {
  return (
    <Page
      content={
        <Wrapper>
          <BigHeading>{profile.name}</BigHeading>
          <section id="personal-info">
            <Text>
              <GrMail /> {profile.socialPresence.email} <br />
              <FaMobileAlt /> {profile.socialPresence.phone}
              <br />
              <GrLocation />
              {profile.address}
              <br />
              <FaPassport />
              {profile.nationality}
              <br />
              {age(moment(profile.dateOfBirth, "YYYY-MM-DD"))[0]}
              <br />
              {profile.gender}
            </Text>
          </section>
          <hr />
          <section id="education">
            <Text>
              {profile.education}
              <br />
            </Text>
          </section>
          <hr />
          <section id="summary">
            <SubHeading>Professional Summary</SubHeading>
            <UnorderedList content={profile.professionalSummary} />
          </section>
          <hr />
          <section id="skills">
            <SubHeading>Relevant skills</SubHeading>
            <UnorderedList content={profile.relevantSkills} />
          </section>
          <hr />
          <section id="work-experience">
            {experience.map((org, index) => (
              <div key={index}>
                <Heading>{org.position}</Heading>
                <SmallHeading>
                  {org.organization.name}
                  {org.dateOfStarting + " - " + org.dateOfEnding}
                </SmallHeading>
                {Object.entries(org.jobDescription).map((jd, index) => (
                  <div key={index}>
                    <SubHeading>{jd[0]}</SubHeading>
                    <UnorderedList content={jd[1]} />
                  </div>
                ))}
                <SubHeading>Tech Stack</SubHeading>
                <UnorderedList content={org.techStack} />
              </div>
            ))}
          </section>
          <hr />
        </Wrapper>
      }
    />
  );
};
export default Resume;
