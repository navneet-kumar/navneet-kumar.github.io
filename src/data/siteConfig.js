import React from "react";
import About from "../pages/about";
import Page from "../pages/page";

export const menuItems = [
  {
    name: "Contact",
    path: "/contact",
    component: () => <Page content={<div>Contact</div>} />,
  },
  {
    name: "Projects",
    path: "/projects",
    component: () => <Page content={<div>Projects</div>} />,
  },
  {
    name: "About",
    path: "/",
    component: About,
  },
  {
    name: "Blog",
    path: "/blog",
    component: () => <Page content={<div>Blog</div>} />,
  },
];

export const theme = {
  backgroundColor: "#034488",
  foregroundColor: "white",
};
