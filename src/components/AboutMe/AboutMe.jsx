import aboutMebgImage from "../../assets/bgImages/aboutMeBgImage.png";
import { scaleFade } from "../../variants";
import AnimatedWrapper from "../AnimatedWrapper/AnimatedWrapper";
import TitleContent from "../TitleContent/TitleContent";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="container">
      <AnimatedWrapper variant={scaleFade} delay={0.2}>
        <div className="img-container">
          <img src={aboutMebgImage} alt="bg-image" />
        </div>
      </AnimatedWrapper>

      
      <div className="about-text-content">
        <TitleContent title={"howIam"} />
      </div>
    </div>
  );
};

export default AboutMe;
