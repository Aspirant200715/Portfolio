import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import WaveBackground from "./WaveBackground";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <WaveBackground />
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className='w-5 h-5 rounded-full bg-[#915EFF]' 
          />
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: '20rem' }}
            transition={{ duration: 1, delay: 0.2 }}
            className='w-1 sm:h-80 h-40 violet-gradient' 
          />
        </div>

        <div>
          <motion.h1 
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`${styles.heroHeadText} text-white`}
          >
            Hi, I'm <span className='text-accent'>Soham</span>
          </motion.h1>
          <motion.p 
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className={`${styles.heroSubText} mt-2 text-white-100`}
          >
            I architect autonomous systems and <br className='sm:block hidden' />
            multimodal AI pipelines for industrial scale.
          </motion.p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
