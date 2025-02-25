import PropTypes from "prop-types";
import Tooltipp from "../../../components/ToolTipp/ToolTipp";
import { flip_card_icons } from "../../../data/flipCardIcons";
import "./SingleProject.css";

const SingleProject = ({
  index,
  src,
  title,
  description,
  techStack,
  projectName,
  style,
}) => {
  const customClass = index % 2 === 0 ? "left" : "right";
  const directionClass = index % 2 === 1 ? "reverse" : "";
  const textAlign = index % 2 === 0 ? "left" : "right";

  return (
    <div className={`project-item ${customClass}`}>
      <div className={`project-content ${directionClass}`} style={style}>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="image-wrapper">
                <img src={src} alt="project-image" />
              </div>
            </div>
            <div className="flip-card-back">
              <div className="techstack">
                <h2>{projectName}</h2>
                <p className="responsive-p">{techStack}</p>
              </div>

              <div className="flip-card-icons">
                {flip_card_icons.map((icon, index) => (
                  <>
                    <Tooltipp text={icon.name}>
                      <div className="flip-card-icons-circle" key={index}>
                        <img src={icon.src} alt="flipCardIcons" />
                      </div>
                    </Tooltipp>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="project-details" style={{ textAlign }}>
          <h3>{title}</h3>
          <div className="description">
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="separator"></div>
    </div>
  );
};

SingleProject.propTypes = {
  index: PropTypes.number,
  src: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  techStack: PropTypes.string,
  projectName: PropTypes.string,
  style: PropTypes.string,
};

export default SingleProject;
