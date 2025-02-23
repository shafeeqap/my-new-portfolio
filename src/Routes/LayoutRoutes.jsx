import { Routes, Route } from "react-router-dom";
import { AboutMe, Contacts, Footer, Header } from "../components";
import { Home, Projects, Skills } from "../Pages";


const LayoutRoutes = () => {
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
      <Footer/>
    </div>
  );
};

export default LayoutRoutes;
