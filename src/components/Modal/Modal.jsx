import ReactDOM from "react-dom";
import { IoMdClose } from "react-icons/io";
import PropTypes from "prop-types";
import "./Modal.css";

const Modal = ({ isOpen, onClose, title, children , style}) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-close" onClick={onClose}>
          <IoMdClose />
        </div>

        <div className="modal-scroll-content">
          {title && <h2 className="modal-title">{title}</h2>}
          <div className="modal-actions" style={style}>{children}</div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.node,
};
export default Modal;
