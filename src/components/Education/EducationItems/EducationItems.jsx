import PropTypes from "prop-types";
import './EducationItems.css'


const EducationItems = ({ icon, education }) => {
  return (
    <>
      <div className="edu-item-wrapper">
        <div className="icon-wrapper">
          <img src={icon} alt="icon" />
        </div>
        <div className="edu-item-text">
          <small>{education}</small>
        </div>
      </div>
    </>
  );
};

EducationItems.propTypes = {
  icon: PropTypes.string,
  education: PropTypes.string,
};
export default EducationItems;
