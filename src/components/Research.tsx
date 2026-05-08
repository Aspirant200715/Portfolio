import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const researchPapers = [
  {
    title: "Latent Diffusion for Molecular Discovery",
    abstract: "A novel approach using latent diffusion models to generate stable catalytic structures with optimized binding energies.",
    tags: ["Generative AI", "Diffusion", "Chemistry"],
    metrics: "45% faster discovery rate",
  },
  {
    title: "Multi-Agent RL in Enterprise Rollouts",
    abstract: "Hybrid decision-making architecture combining reinforcement learning with safety constraints for autonomous deployments.",
    tags: ["RL", "Systems", "Automation"],
    metrics: "99.9% deployment safety",
  },
  {
    title: "Multimodal Retrieval Systems",
    abstract: "Architecting efficient indexing for heterogeneous data across text, image, and audio using semantic embeddings.",
    tags: ["Information Retrieval", "Multimodal", "Scaling"],
    metrics: "120ms p99 latency",
  },
];

const ResearchCard = ({ index, title, abstract, tags, metrics }: any) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className='bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 w-full hover:bg-white/10 transition-all duration-300 shadow-2xl'
  >
    <div className='flex justify-between items-start flex-wrap gap-4'>
      <h3 className='text-white font-bold text-[24px] tracking-tight'>{title}</h3>
      <span className='px-4 py-1 bg-[#915EFF]/20 text-[#915EFF] text-[12px] font-mono rounded-full border border-[#915EFF]/40'>
        {metrics}
      </span>
    </div>
    <p className='mt-4 text-secondary text-[16px] leading-[26px]'>{abstract}</p>
    
    <div className='mt-6 flex flex-wrap gap-2'>
      {tags.map((tag: string) => (
        <span key={tag} className='px-3 py-1 bg-tertiary rounded-full text-[12px] text-[#915EFF] border border-[#915EFF]/30'>
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const Research = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Scientific Contributions</p>
        <h2 className={styles.sectionHeadText}>Research Lab.</h2>
      </motion.div>

      <div className='mt-20 flex flex-col gap-10'>
        {researchPapers.map((paper, index) => (
          <ResearchCard key={paper.title} index={index} {...paper} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Research, "research");
