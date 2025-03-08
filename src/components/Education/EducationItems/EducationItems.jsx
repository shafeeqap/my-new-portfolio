import PropTypes, { string } from "prop-types";
import "./EducationItems.css";

const EducationItems = ({
  icon,
  institution,
  course,
  startYear,
  endYear,
  style,
}) => {
  return (
    <>
      <div className="edu-item-wrapper">
        <div className="icon-circle">
          <img src={icon} alt="icon" />
        </div>
        <div className="edu-item-text">
          <p style={{ color: style }}>{course}</p>
          <small>
            {startYear}-{endYear}
          </small>
          <h5>{institution}</h5>
        </div>
      </div>
    </>
  );
};

EducationItems.propTypes = {
  icon: PropTypes.string,
  institution: PropTypes.string,
  course: PropTypes.string,
  startYear: PropTypes.number,
  endYear: PropTypes.number || string,
  style: PropTypes.string,
};
export default EducationItems;
