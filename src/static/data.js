import email from "../assets/images/email_icon.png";
import gitHub from "../assets/images/GitHubIcon.png";
import linkedIn from "../assets/images/linkedin.png";

export const nav_items = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/about-me",
    display: "About me",
  },
  {
    path: "/projects",
    display: "Projects",
  },
  {
    path: "/skills",
    display: "Skills",
  },
  {
    path: "/contacts",
    display: "Contacts",
  },
];

export const imageList = [
  { src: email, alt: "Email" },
  { src: gitHub, alt: "GitHub" },
  { src: linkedIn, alt: "LinkedIn" },
];

export const buttonList = [
  { variant: "primary", size: "small", name: "Resume" },
  { variant: "secondary", size: "small", name: "Contact me" },
];
