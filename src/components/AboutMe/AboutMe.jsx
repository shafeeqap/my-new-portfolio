import "./AboutMe.css";
import bgImage from "../../assets/images/creative.png";
import TitleLabel from "../../components/TitleLabel/TitleLabel";

const AboutMe = () => {
  return (
    <div className="container">
      <div className="img-container">
        <img src={bgImage} alt="bg-image" />
      </div>
      <div className="about-text-content">
        <TitleLabel>
          <p>How I am</p>
        </TitleLabel>
        <p>
          Greetings, and welcome to my portfolio! I&apos;m Aboobacker
          Shafeeq.AP, a passionate and innovative developer with a keen eye for
          creating immersive digital experiences.With a blend of technical
          prowess and creative vision, bring life to the virtual world through
          my coding skills and design sensibilities.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
