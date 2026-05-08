import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const achievements = [
  {
    title: "JEE Advanced",
    description: "Cleared one of India’s toughest engineering entrance examinations.",
    icon: "🎓",
  },
  {
    title: "Math Olympiad",
    description: "Ranked among the Top 50 students nationwide in National Math Olympiad.",
    icon: "🏆",
  },
  {
    title: "Meta Hackathon",
    description: "Participated in Meta Hackathon and built AI-driven solutions.",
    icon: "💬",
  },
  {
    title: "Vector Global",
    description: "Competed in hackathon focused on vector embeddings and semantic search.",
    icon: "🧠",
  },
  {
    title: "AI for Bharat",
    description: "Developed AI solutions for Indian social challenges (AWS Hackathon).",
    icon: "🇮🇳",
  },
  {
    title: "AI Agent Olympics",
    description: "Selected participant focused on autonomous AI agent systems.",
    icon: "🤖",
  },
  {
    title: "Hacktoberfest",
    description: "Successfully merged 3 PRs into major open-source repositories.",
    icon: "🚀",
  },
  {
    title: "GSSoC ’26",
    description: "Selected contributor for GirlScript Summer of Code.",
    icon: "💻",
  },
  {
    title: "ReThesis",
    description: "Active participant in AI research and technical knowledge-sharing.",
    icon: "📖",
  },
  {
    title: "AI Communities",
    description: "Active member of AI/ML, open-source, and developer communities.",
    icon: "🤝",
  },
];

interface AchievementCardProps {
  index: number;
  title: string;
  description: string;
  icon: string;
}

const AchievementCard = ({ index, title, description, icon }: AchievementCardProps) => (
  <motion.div variants={fadeIn("right", "spring", index * 0.2, 0.75)}>
    <Tilt
      options={{
        max: 25,
        scale: 1.05,
        speed: 400,
      }}
      className='bg-tertiary p-6 rounded-2xl xs:w-[260px] w-full border-b-4 border-accent shadow-2xl hover:bg-white/5 transition-all duration-300 flex flex-col min-h-[220px]'
    >
      <div className='text-[32px] mb-3'>{icon}</div>
      <h3 className='text-white font-bold text-[18px] tracking-tight leading-tight'>{title}</h3>
      <p className='mt-3 text-secondary text-[13px] leading-relaxed'>{description}</p>
    </Tilt>
  </motion.div>
);

const Achievements = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Milestones</p>
        <h2 className={styles.sectionHeadText}>Achievements.</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap justify-center gap-6'>
        {achievements.map((achievement, index) => (
          <AchievementCard key={`achievement-${index}`} index={index} {...achievement} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Achievements, "");
