import "./Skills.css";
import skillBgImg from "../../assets/bgImages/skillsBg.png";
import Marquee from "react-fast-marquee";
import { skillsData } from "../../data/skillsData";
import { skillsImage } from "../../utils/skillsImages";
import TitleContent from "../TitleContent/TitleContent";
import { scaleFade } from "../../variants";
import AnimatedWrapper from "../AnimatedWrapper/AnimatedWrapper";

const Skills = () => {
  return (
    <main>
      <div className="skills-container">
        <AnimatedWrapper variant={scaleFade} delay={0.2}>
          <div className="skills-bg-image-container">
            <img src={skillBgImg} alt="bgimage" />
          </div>
        </AnimatedWrapper>

        <div className="skills-content-wrapper">
          <div>
            <TitleContent title={"skills"} />
          </div>

          <AnimatedWrapper
            variant={scaleFade}
            delay={0.2}
            className="skills-box-container"
          >
            <Marquee
              gradient={false}
              speed={80}
              pauseOnHover={true}
              pauseOnClick={true}
              delay={0}
              play={true}
              direction="left"
            >
              {skillsData.map((skill, id) => (
                <div key={id} className="skills-box">
                  <div className="skills-image-box">
                    <img src={skillsImage(skill)} alt={skill} />
                  </div>
                  <div className="skills">
                    <p>{skill}</p>
                  </div>
                </div>
              ))}
            </Marquee>
          </AnimatedWrapper>
        </div>
      </div>
    </main>
  );
};

export default Skills;
