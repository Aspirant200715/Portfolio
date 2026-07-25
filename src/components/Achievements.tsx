import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { achievements } from "../constants";

interface AchievementCardProps {
  index: number;
  title: string;
  description: string;
  icon: string;
}

const AchievementCard = ({ index, title, description, icon }: AchievementCardProps) => (
  <motion.div 
    variants={fadeIn("up", "spring", index * 0.1, 0.75)}
    className="w-full"
  >
    <div className='relative group h-full'>
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
      
      {/* Card Content */}
      <div className='relative h-full bg-tertiary p-6 rounded-2xl flex flex-col hover:-translate-y-2 transition-all duration-300'>
        <div className='w-12 h-12 rounded-full bg-black-200 flex justify-center items-center mb-4 shadow-inner'>
          <span className='text-[24px]'>{icon}</span>
        </div>
        
        <h3 className='text-white font-bold text-[18px] tracking-tight mb-2'>
          {title}
        </h3>
        
        <p className='text-secondary text-[14px] leading-relaxed flex-grow'>
          {description}
        </p>
      </div>
    </div>
  </motion.div>
);

const Achievements = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>Milestones</p>
        <h2 className={styles.sectionHeadText}>Achievements.</h2>
      </motion.div>

      <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {achievements.map((achievement, index) => (
          <AchievementCard key={`achievement-${index}`} index={index} {...achievement} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Achievements, "achievements");

