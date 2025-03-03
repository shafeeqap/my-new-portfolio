import { motion, useInView } from "framer-motion";
import PropTypes from "prop-types";
import { useRef } from "react";

const AnimatedWrapper = ({
  children,
  variant,
  direction = "right",
  delay = 0,
  className,
  ...props
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    triggerOnce: false,
    margin: "-20% 0px",
    amount: 0.25,
  });

  const getVariants = () => {
    try {
      return variant(
        variant.length === 1 ? { delay } : { direction, delay }
      );
    } catch {
      return variant({ delay });
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={getVariants()}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

AnimatedWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.func.isRequired,
  direction: PropTypes.oneOf(["left", "right", "up", "down"]),
  delay: PropTypes.number,
  className: PropTypes.string,
};
export default AnimatedWrapper;
