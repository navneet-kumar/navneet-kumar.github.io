import React from "react";
import Home from "../pages/home";
import Contact from "../pages/contact";
import Resume from "../pages/resume";
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
    name: "Resume",
    path: "/resume",
    component: Resume,
  },
  {
    name: "Contact",
    path: "/contact",
    component: Contact,
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
  dateOfBirth: "1992-03-17", //YYYY-MM-DD
  dateOfStarting: "2013-12-23",
  nationality: "Indian 🇮🇳",
  gender: "Male",
  education: "University of Pune. B.E. in IT (2013)",
  address:
    "〒213-0015 \n Kanagawa-ken, Kawasaki-shi, Takatsu-ku, 2-chōme-7-18 Kajigaya,green coppo #201 ",
  socialPresence: {
    email: "mailto:navneetkumar812@gmail.com",
    phone: "+81 8087487803",
    github: "https://github.com/navneet-kumar/",
    linkedin: "https://www.linkedin.com/in/eng-navneet-kumar",
    twitter: "https://twitter.com/navneetkumar812",
    stackOverflow:
      "https://stackoverflow.com/users/5542309/navneet-kumar?tab=profile",
  },
  description:
    "Hi .. I am Navneet !! \r\n I am a software engineer with $experience years of experience",
  professionalSummary: [
    "A versatile software engineer experienced in different technologies and domains, who has developed a can-do attitude over his career.",
    "With 6+ years of experience (3+ of them in fast-paced startup environments), I believe there's no definitive way of solving problems, and that we should always look for new ways to create better solutions.",
    "I had developed and delivered software solutions from scratch within a deadline, having been involved in all phases of SDLC (Agile method) business requirements, design, coding, testing & release.",
    "Taking full responsibility for performance improvements of existing products, I have worked on refactoring, adding new features, maintenance, troubleshooting, code reviews and bug fixing.",
    "Additionally, I have also worked as a bridge engineer for 6 months, and lead a technical team for 1 year, being tasked to train and mentor junior engineers.",
  ],
  relevantSkills: [
    "Proficiency with Java and Javascript which includes popular frameworks like React Js/React Native.",
    "I have implemented ​RESTful API​ and gained experience in deploying microservices on docker containers.",
    "Strong background with version control systems like Git.",
    "Hands on experience with CI/CD tools like Jenkins, GitLab and also circle CI.",
    "Industry experience with Relational databases such as PostgreSQL, MySQL and also obtained oracle ​SQL expert​ certification, I am also familiar with NoSQL databases such as MongoDB.",
  ],
};

export const experience = [
  {
    organization: {
      name: "Rakuten, Inc.",
      url: "https://www.rakuten.co.jp/",
    },
    position: "Programmer Analyst",
    dateOfStarting: "2017-07-1",
    dateOfEnding: "Present",
    jobDescription: {
      "Rakuten Talk": [
        "Lead a team of 6 engineers, helping them unblock and troubleshoot technical issues.",
        "Worked with ​model-based testing to help avoid test case maintenance and also to cover all permutation and use case combinations.",
        "Built the system from scratch, understanding well its core dependency and all the possible ways to break it.",
      ],
      "Rakuten Membership SDK​": [
        "Independently created (Individual contributor) the unified mobile automation framework (selenium + Appium + TestNG) from scratch for the mobile SDK (Android + iOS) testing",
        "Test cases maintenance in test rail which was the input to the automation framework.",
        "The biggest challenge was reducing execution time with the increasing size of test cases. I achieved it by using explicit waits and removing all implicit waits.",
      ],
      "Rakuten Travel​": [
        "Added features in a testing framework using Java 6 and test-NG.",
        "Executed testing framework on Docker, nightly bases.",
        "Created a reporting tool (web-app) with the help of 3 team members for sharing test case execution results. Front End using J-Query based UI, backend flat files.",
      ],
    },
    techStack: [
      "Java",
      "Selenium",
      "Appium",
      "Docker",
      "Kotlin (Beginner)",
      "JIRA",
      "Git",
      "Confluence",
    ],
  },
  {
    organization: {
      name: "Cybage software pvt. ltd.",
      url: "https://www.cybage.com/",
    },
    position: "Sr. Software engineer",
    dateOfStarting: "2016-03-1",
    dateOfEnding: "2016-03-27",
    jobDescription: {
      "": [
        "Written unit test cases for a microservice (order placement), also increased code coverage by 80%.",
        "Created microservice for multiple translations (Japanese, Korean & Taiwanese), dictionary-based solution.",
        "Created microservice using Java Spark to generate ​basic Appium capabilities​ for testing Automation.",
        "Developed an iOS native app using Swift, please feel free to check it out ​PitchPerfect​.",
        'Developed mobile app using Cross platform technology (React Native). An appointment\'s management mobile app for doctors <a href="https://github.com/navneet-kumar/MyClinic">​MyClinic</a>​.',
        "Created a ​JSON-based REST API service using Node Js and docker which resizes images into 100x100px thumbnails, ​scalable system​ design.",
      ],
    },
    techStack: [
      "Spring boot and Java Spark",
      "Java",
      "Selenium",
      "Appium",
      "React Native (React Js)",
      "Swift Basics",
      "Git",
      "Node Js",
    ],
  },
  {
    organization: {
      name: "World Compliance Technologies",
      url: "http://wct-inc.com/",
    },
    position: "Software engineer",
    dateOfStarting: "2015-07-1",
    dateOfEnding: "2016-03-27",
    jobDescription: {
      "Biometric (Palm vein) Authentication System": [
        "Acted as the Product Development Manager and designed the User Activity Flow (UAF).",
        "Designed the UX (User Experience) for every web page.",
        "Improved TTI metric by 10% using minified packages.",
        "Worked with Tomcat servers to host the web application and MySQL databases for the backend support.",
        "Spring and JAX-RS were used in the business layer.",
      ],
    },
    techStack: [
      "Java Spring (Backend)",
      "JavaScript",
      "jQuery (Fornt-end)",
      "HTML/ CSS (Fornt-end)",
      "PostgreSQL/ MySQL Database",
    ],
  },
  {
    organization: {
      name: "Uniken",
      url: "https://www.uniken.com/",
    },
    position: "Linux Engineer",
    dateOfStarting: "2013-12-23",
    dateOfEnding: "2015-06-30",
    jobDescription: {
      "2 Factor and 3 Factor authentication system (REL-ID)": [
        "​Manage existing customer accounts to ensure customer satisfaction in the banking and insurance domain in India (SBI, Axis, Yes Bank, Ing Vysya, Bharti Axa, etc.).",
        "​Helped pre-sales and sales groups to acquire new customers by conducting POC's and only the fly solutions.",
        "Worked as Linux administrator and deployed solutions majorly on RHEL (Red Hat Enterprise Limited) into the newly acquired customer's environment.",
        "Worked on different Unix/Linux and Windows platforms, written shell and batch scripts to automate trivial tasks.",
      ],
    },
    techStack: [
      "Shell / Bash scripting",
      "Linux / Unix",
      "Networking (Routers/IP whitelisting)",
      "Resolving penetration testing issues (server hardening)",
    ],
  },
];
