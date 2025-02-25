import Button from "../Button/Button";
import { IoEyeOutline } from "react-icons/io5";
import "./ViewAll.css";
import PropTypes from "prop-types";

const ViewAll = ({ marginTop }) => {
  return (
    <div style={{ marginTop }} className="viewAll-btn">
      <Button type="button" variant="primary" size="small">
        <div className="view-align-eye">
          View All <IoEyeOutline size={18} />
        </div>
      </Button>
    </div>
  );
};

ViewAll.propTypes = {
  marginTop: PropTypes.number,
};
export default ViewAll;
