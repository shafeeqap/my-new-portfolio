import { AboutMe, Contacts, Education, Welcome } from "../../components";

import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <>
      <Welcome />
      <AboutMe />
      <Projects />
      <Skills />
      <Education />
      <Contacts />
    </>
  );
};

export default Home;
