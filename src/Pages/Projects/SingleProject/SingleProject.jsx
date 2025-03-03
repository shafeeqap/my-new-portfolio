import React from "react";
import PropTypes from "prop-types";
import { AnimatedWrapper, ExpandableText, ToolTipp } from "../../../components";
import { flip_card_icons } from "../../../data/flipCardIcons";
import { bounceIn } from "../../../variants";
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
            </div>
            <div className="flip-card-back">
              <div className="techstack">
                <h2>{projectName}</h2>
                <p className="responsive-p">{techStack}</p>
              </div>

              <div className="flip-card-icons">
                {flip_card_icons.map((icon, index) => (
                  <React.Fragment key={index}>
                    <ToolTipp text={icon.name}>
                      <div className="flip-card-icons-circle">
                        <img src={icon.src} alt="flipCardIcons" />
                      </div>
                    </ToolTipp>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="project-details" style={{ textAlign }}>
          <div className="description">
            <h3>{title}</h3>
            <div>
              <ExpandableText text={description} limit={100} />
            </div>
          </div>
        </div>
      </div>
      <div className="separator" style={{ top: style }}></div>
    </AnimatedWrapper>
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
