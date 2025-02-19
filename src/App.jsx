import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Header from "./components/Header/Header";
import Projects from "./Pages/Projects/Projects";
import Skills from "./Pages/Skills/Skills";
import Contacts from "./Pages/Contacts/Contacts";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
};

export default App;
