import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>My technical skills</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-8 mt-10'>
        {technologies.map((technology, index) => (
          <motion.div
            variants={fadeIn("up", "spring", index * 0.1, 0.75)}
            key={technology.name}
            className='w-32 h-32 flex flex-col items-center justify-center bg-tertiary rounded-2xl shadow-card hover:bg-black-200 transition-all duration-300 transform hover:-translate-y-2 border border-white/10'
          >
            <img 
              src={technology.icon} 
              alt={technology.name} 
              className='w-16 h-16 object-contain mb-3' 
            />
            <p className="text-white text-center font-medium text-sm">
              {technology.name}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
