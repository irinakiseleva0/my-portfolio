
export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};
// плавный выезд слева
export const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// scale-in, чуть увеличивается при появлении
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

// flip-in по оси X
export const flipIn = {
  hidden: { opacity: 0, rotateX: -12, y: 8 },
  visible: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

// общий stagger-для списков (children должны иметь свои variants)
export const listStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
