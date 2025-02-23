import PropTypes from "prop-types";
import './TitleLabel.css'

const TitleLabel = ({ children, style }) => {
  return (
    <div className="title-label" style={style}>
      {children}
    </div>
  );
};
TitleLabel.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};
export default TitleLabel;
