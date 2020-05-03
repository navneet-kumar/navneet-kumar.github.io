import React from "react";
import Home from "../pages/home";
import Page from "../pages/page";

export const menuItems = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "Blog",
    path: "/blog",
    component: () => <Page content={<div>Blog</div>} />,
  },
  {
    name: "Projects",
    path: "/projects",
    component: () => <Page content={<div>Projects</div>} />,
  },
  {
    name: "Contact",
    path: "/contact",
    component: () => <Page content={<div>Contact</div>} />,
  },
];

export const theme = {
  backgroundColor: "#034488",
  foregroundColor: "white",
};

export const profile = {
  name: "Navneet kumar",
  profilePic: "https://i.stack.imgur.com/70UsV.jpg?s=328&g=1",
  profession: "IT Engineer",
  dob: "1992-03-17",
  doj: "2013-12-23",
  nationality: "Indian",
  gender: "Male",
  education: "University of Pune. B.E. in IT (2013)",
  socialPresence: {
    github: "https://github.com/navneet-kumar/",
    linkedin: "https://www.linkedin.com/in/eng-navneet-kumar",
    twitter: "https://twitter.com/navneetkumar812",
  },
  description:
    "Hi .. I am Navneet !! \n I am a software engineer with $experience years of experience",
};

export const experience = [
  {
    organization: {
      name: "Uniken",
      url: "https://www.uniken.com/",
    },
    position: "Linux Engineer",
    doj: "2013-12-23",
    doe: "2015-06-30",
    jobDescription: [],
    techStack: [
      "Shell / Bash scripting",
      "Linux / Unix",
      "Networking (Routers/IP whitelisting)",
      "Resolving penetration testing issues (server hardening)",
    ],
  },
];
