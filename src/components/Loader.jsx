// src/components/Loader.jsx
import { motion } from "framer-motion";
import { containerStagger, fadeInUp } from "../animation/variants.js";

const dotVariants = {
  animate: {
    scale: [1, 1.4, 1],
    opacity: [0.4, 1, 0.4],
    transition: {
      duration: 0.7,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

function Loader({ lang }) {
  const text = lang === "fr" ? "Chargement..." : "Loading...";

  return (
    <motion.div
      className="loader"
      variants={containerStagger}
      initial="hidden"
      animate="visible"
    >
      <div className="loader__inner">
        <motion.div className="loader__logo" variants={fadeInUp}>
          IK
        </motion.div>

        <motion.p className="loader__text" variants={fadeInUp}>
          {text}
        </motion.p>

        <div className="loader__dots">
          <motion.span
            className="loader__dot"
            variants={dotVariants}
            animate="animate"
          />
          <motion.span
            className="loader__dot"
            variants={dotVariants}
            animate="animate"
            transition={{ delay: 0.15 }}
          />
          <motion.span
            className="loader__dot"
            variants={dotVariants}
            animate="animate"
            transition={{ delay: 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Loader;
