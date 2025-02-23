import "./Skills.css";
import bgImg from "../../assets/bgImages/skillsBg.png";
import TitleLabel from "../../components/TitleLabel/TitleLabel";
import Marquee from "react-fast-marquee";
import { skillsData } from "../../data/skillsData";
import { skillsImage } from "../../utils/skillsImages";

const Skills = () => {
  return (
    <main>
      <div className="skills-container">
        <div className="skills-bg-image-container">
          <img src={bgImg} alt="bgimage" />
        </div>
        <div className="skills-content-wrapper">
          <div className="skills-text-content">
            <TitleLabel>
              <p>Skills</p>
            </TitleLabel>
            <p>
              Experienced and versatile professional with a strong foundation in
              both digital designing and computer coding. Proficient in
              utilizing industry-standard design tools to create visually
              captivating graphics, user interfaces, and digital content.
            </p>
          </div>
          <div className="skills-box-container">
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
          </div>
        </div>
      </div>
    </main>
  );
};

export default Skills;
