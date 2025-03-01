import { AboutMe, Contacts, Education, Skills, Welcome, ScrollToTopButton } from "../../components";
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
      <div>{<ScrollToTopButton />}</div>
    </>
  );
};

export default Home;
