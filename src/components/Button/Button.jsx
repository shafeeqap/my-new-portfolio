import PropTypes from "prop-types";
import "./Button.css";
import AnimatedWrapper from "../AnimatedWrapper/AnimatedWrapper";
import { fadeUp } from "../../variants";

const Button = ({
  onClick = undefined,
  children,
  type = "button",
  isDisabled = false,
  size = "medium",
  variant = "primary",
  className = "",
}) => {
  const variantClass = `button-${variant}`;
  const sizClass =
    size === "small" ? "button-small" : size === "large" ? "button-large" : "";
  const disabledClass = isDisabled ? "button-disabled" : "";

  return (
    <>
      <AnimatedWrapper variant={fadeUp} delay={0.2}>
        <button
          type={type}
          onClick={onClick}
          disabled={isDisabled}
          className={`button ${variantClass} ${sizClass} ${disabledClass} ${className}`}
        >
          {children}
        </button>
      </AnimatedWrapper>
    </>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit"]),
  variant: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["small", "medium"]),
  isDisabled: PropTypes.bool,
  className: PropTypes.string,
};
export default Button;
