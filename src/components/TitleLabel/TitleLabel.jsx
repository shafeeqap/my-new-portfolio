import PropTypes from "prop-types";
import './TitleLabel.css'

const HeaderLabel = ({ children, style }) => {
  return (
    <div className="title-label" style={style}>
      {children}
    </div>
  );
};
HeaderLabel.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};
export default HeaderLabel;
