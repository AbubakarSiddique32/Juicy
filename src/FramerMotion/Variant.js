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
    x: direction > 0 ? 1000 : -1000,
    rotate: direction > 0 ? 15 : -15,
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.4, ease: "easeInOut" },
  }),
  center: {
    x: 0,
    rotate: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
  exit: (direction) => ({
    x: direction > 0 ? -1000 : 1000,
    rotate: direction > 0 ? -15 : 15,
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.4, ease: "easeInOut" },
  }),
};
