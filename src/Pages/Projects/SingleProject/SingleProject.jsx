import PropTypes from "prop-types";
import { AnimatedWrapper, ReadMore, ToolTipp } from "../../../components";
import { flipCardIcons } from "../../../data";
import { bounceIn } from "../../../variants";
import "./SingleProject.css";

const SingleProject = ({
  index,
  src,
  projectImg,
  title,
  description,
  techStack,
  gitHub,
  externalLink,
  style,
}) => {
  const customClass = index % 2 === 0 ? "left" : "right";
  const directionClass = index % 2 === 1 ? "reverse" : "";

  return (
    <AnimatedWrapper
      variant={bounceIn}
      delay={0.3}
      className={`project-item ${customClass}`}
    >
      <div className={`project-content ${directionClass}`}>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="image-wrapper">
                <img src={src} alt="project-image" />
              </div>
              <div className="responsive-p">
                <p>{techStack}</p>
              </div>
            </div>
            <div className="flip-card-back">
              <div className="techstack">
                <div className="project-image-box">
                  <img src={projectImg} alt="project-image" />
                </div>
              </div>

              <div className="flip-card-icons">
                {flipCardIcons.map((icon, index) => {
                  const linkUrl =
                    icon.name === "GitHub"
                      ? gitHub
                      : icon.name === "External Link"
                      ? externalLink
                      : "";

                  return (
                    linkUrl && (
                      <ToolTipp text={icon.name} key={index}>
                        <a href={linkUrl} target="_blank" rel="noreferrer">
                          <div className="flip-card-icons-circle">
                            <img src={icon.src} alt="flipCardIcons" />
                          </div>
                        </a>
                      </ToolTipp>
                    )
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className={`project-details ${directionClass}`}>
          <div className="description" style={style}>
            <h3>{title}</h3>
            <div>
              <ReadMore text={description} limit={300} />
            </div>
          </div>
        </div>
      </div>
      <div className="separator" style={style}></div>
    </AnimatedWrapper>
  );
};

SingleProject.propTypes = {
  index: PropTypes.number,
  src: PropTypes.string,
  projectImg: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  techStack: PropTypes.string,
  projectName: PropTypes.string,
  style: PropTypes.string,
  gitHub: PropTypes.string,
  externalLink: PropTypes.string,
};

export default SingleProject;
