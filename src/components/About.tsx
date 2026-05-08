import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }: any) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className='mt-4 flex lg:flex-row flex-col gap-10 items-center'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='text-white-100 font-medium text-[18px] max-w-3xl leading-[32px]'
        >
          I'm a highly motivated AI Engineer and Researcher with a deep passion for building 
          autonomous systems and intelligent infrastructure. My expertise spans from 
          Large Language Models (LLMs) and Diffusion Models to scalable backend architectures 
          using FastAPI and Next.js. I thrive at the intersection of computational intelligence 
          and real-world problem solving, whether it's optimizing molecular discovery or 
          automating disaster relief operations.
        </motion.p>
        <motion.div
          variants={fadeIn("left", "spring", 0.5, 1)}
          className='lg:w-[320px] w-full flex justify-center items-center'
        >
          <div className='relative w-[280px] h-[350px] rounded-2xl overflow-hidden border-2 border-[#58a6ff]/50 shadow-[0_0_30px_rgba(88,166,255,0.3)]'>
             <img 
               src="/soham.jpg" 
               alt="Soham Gangopadhyay" 
               className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500 transform hover:scale-110" 
             />
             <div className='absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-transparent to-transparent opacity-60' />
          </div>
        </motion.div>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
