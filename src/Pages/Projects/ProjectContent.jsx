import PropTypes from "prop-types";

const ProjectContent = ({
  className = "project-item",
  index,
  src,
  title,
  description,
  style,
}) => {
  const customClass = index % 2 === 0 ? "left" : "right";

  return (
    <div className={`${className} ${customClass}`}>
      <div className="project-content" style={style}>
        <div className="project-image-box">
          <div className="image-wrapper">
            <img src={src} alt="project-image" />
          </div>
        </div>
        <div className="project-details">
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

ProjectContent.propeTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  style: PropTypes.string,
};

export default ProjectContent;
