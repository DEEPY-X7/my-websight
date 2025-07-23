// animations.js
export const fadeDown = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1 },
};

export const floatY = (index = 0) => ({
  animate: { y: [0, -6, 0, 6, 0] },
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
    delay: index * 0.3,
  },
});
