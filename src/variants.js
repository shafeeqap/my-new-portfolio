export const fadeIn = ({ direction, delay = 0 }) => {
  return {
    requiresDirection: true,
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "tween",
        duration: 1.2,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const slideIn = ({ direction, delay = 0 }) => {
  return {
    hidden: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.8,
        delay,
        stiffness: 100,
        damping: 20,
      },
    },
  };
};

export const scaleFade = ({ delay = 0 }) => {
  return {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.6,
        delay,
        ease: "easeOut",
      },
    },
  };
};

export const rotateIn = ({ delay = 0 }) => {
  return {
    hidden: {
      rotate: -90,
      opacity: 0,
    },
    show: {
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.8,
        delay,
        stiffness: 120,
      },
    },
  };
};

export const bounceIn = ({ delay = 0 }) => {
  return {
    hidden: {
      scale: 0.5,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        delay,
        stiffness: 260,
        damping: 50,
      },
    },
  };
};

export const fadeUp = ({ delay = 0 }) => {
  return {
    hidden: {
      y: 20,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        delay,
        stiffness: 100,
        damping: 20,
      },
    },
  };
};
