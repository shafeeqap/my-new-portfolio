import { AboutMe, Contacts, Education, Skills, Welcome } from "../../components";
import Projects from "../Projects/Projects";


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
