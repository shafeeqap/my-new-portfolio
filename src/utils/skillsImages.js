import html from "../assets/svg/skills/html-5.svg";
import css from "../assets/svg/skills/css-logo.svg";
import c from "../assets/svg/skills/c.svg";
import express from "../assets/svg/skills/expressjs.svg";
import git from "../assets/svg/skills/git.svg";
import java from "../assets/svg/skills/java.svg";
import bootstrap from "../assets/svg/skills/bootstrap.svg";
import nodejs from "../assets/svg/skills/nodejs.svg";
import postgresql from "../assets/svg/skills/postgresql.svg";
import react from "../assets/svg/skills/react.svg";
import reactRouter from "../assets/svg/skills/reactrouter.svg";
import redux from "../assets/svg/skills/redux.svg";
import socketio from "../assets/svg/skills/socketio.svg";
import javaScript from "../assets/svg/skills/javascript.svg";
import typeScript from "../assets/svg/skills/typescript.svg";
import mui from "../assets/svg/skills/mui.svg";
import tailwindcss from "../assets/svg/skills/tailwindcss.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();

  switch (skillID) {
    case "html":
      return html;
    case "css":
      return css;
    case "c":
      return c;
    case "express":
      return express;
    case "git":
      return git;
    case "java":
      return java;
    case "bootstrap":
      return bootstrap;
    case "nodejs":
      return nodejs;
    case "postgresql":
      return postgresql;
    case "react":
      return react;
    case "reactrouter":
      return reactRouter;
    case "redux":
      return redux;
    case "socketio":
      return socketio;
    case "javascript":
      return javaScript;
    case "typescript":
      return typeScript;
    case "mui":
      return mui;
    case "tailwindcss":
      return tailwindcss;
    default:
      break;
  }
};
