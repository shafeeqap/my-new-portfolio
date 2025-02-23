import { AboutMe, Contacts, Welcome } from "../../components";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <>
      <Welcome />
      <AboutMe />
      <Projects />
      <Skills />
      <Contacts />
    </>
  );
};

export default Home;
