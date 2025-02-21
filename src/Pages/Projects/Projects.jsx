import TitleLabel from "../../components/TitleLabel/TitleLabel";
import "./Projects.css";
import Project_image from "../../assets/images/Project_image.jpg";

const Projects = () => {
  return (
    <div className="project-container">
      <div className="project-content-wrapper">
        <div>
          <TitleLabel>
            <p>Projects</p>
          </TitleLabel>
        </div>

        {/* Project item with left-to-right separator */}
        <div className="project-item left">
          <div className="project-content">
            <div className="project-image-box">
              <div className="image-wrapper">
                <img src={Project_image} alt="project-image" />
              </div>
            </div>
            <div className="project-details">
              <h3>E-commerce platform</h3>
              <div className="description">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries.
                </p>
              </div>
            </div>
          </div>
          <div className="separator"></div>
        </div>

        {/* Project item with right-to-left separator */}
        <div className="project-item right">
          <div className="project-content reverse">
            <div className="project-image-box">
              <div className="image-wrapper">
                <img src={Project_image} alt="project-image" />
              </div>
            </div>
            <div className="project-details" style={{ textAlign: "right" }}>
              <h3>E-commerce platform</h3>
              <div className="description">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting.
                </p>
              </div>
            </div>
          </div>
          <div className="separator"></div>
        </div>

        {/* Project item with left-to-right separator */}
        <div className="project-item left">
          <div className="project-content">
            <div className="project-image-box">
              <div className="image-wrapper">
                <img src={Project_image} alt="project-image" />
              </div>
            </div>
            <div className="project-details">
              <h3>E-commerce platform</h3>
              <div className="description">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting.
                </p>
              </div>
            </div>
          </div>
          <div className="separator"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
