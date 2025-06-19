export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

const juiceVariants = {
  enter: (direction) => ({
    rotateY: direction > 0 ? 180 : -180,
    opacity: 0,
    zIndex: 0,
  }),
  center: {
    rotateY: 0,
    opacity: 1,
    zIndex: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
  exit: (direction) => ({
    rotateY: direction > 0 ? -180 : 180,
    opacity: 0,
    zIndex: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  }),
};
