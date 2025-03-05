import aboutMebgImage from "../../assets/bgImages/aboutMeBgImage.png";
import { scaleFade } from "../../variants";
import AnimatedWrapper from "../AnimatedWrapper/AnimatedWrapper";
import TitleContent from "../TitleContent/TitleContent";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="container" id="about-me">
      <AnimatedWrapper variant={scaleFade} delay={0.2}>
        <div className="img-container">
          <img src={aboutMebgImage} alt="bg-image" />
        </div>
      </AnimatedWrapper>

      
      <AnimatedWrapper variant={scaleFade} delay={0.2} className="about-text-content">
        <TitleContent title={"howIam"} />
      </AnimatedWrapper>
    </div>
  );
};

export default AboutMe;
