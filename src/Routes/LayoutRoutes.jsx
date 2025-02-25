import { Routes, Route } from "react-router-dom";
import { AboutMe, Contacts, Education, Footer, Header, Skills } from "../components";
import { Home, Projects } from "../Pages";


const LayoutRoutes = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default LayoutRoutes;
