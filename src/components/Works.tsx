import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

interface Tag {
  name: string;
  color: string;
}

interface ProjectCardProps {
  index: number;
  name: string;
  description: string;
  tags: Tag[];
  image: string;
  source_code_link: string;
  width?: string;
  height?: string;
  titleSize?: string;
}

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  width = "sm:w-[340px]",
  height = "h-[580px]",
  titleSize = "text-[24px]",
}: ProjectCardProps) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="flex">
      <Tilt
        options={{
          max: 25,
          scale: 1.05,
          speed: 400,
          glare: true,
          "max-glare": 0.5,
        }}
        className={`bg-tertiary p-5 rounded-2xl ${width} w-full ${height} flex flex-col border border-white/5 shadow-2xl hover:border-[#58a6ff]/50 transition-all duration-300`}
      >
        <div className='relative w-full h-[200px] group overflow-hidden rounded-2xl shrink-0'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border border-white/20'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-6 flex-grow overflow-hidden'>
          <h3 className={`text-white font-black ${titleSize} tracking-tight hover:text-[#58a6ff] transition-colors leading-tight`}>{name}</h3>
          <p className='mt-3 text-white-100 font-medium text-[15px] leading-relaxed line-clamp-6'>{description}</p>
        </div>

        <div className='mt-6 flex flex-wrap gap-2 pt-2 shrink-0'>
          {tags.map((tag: any) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[11px] font-bold px-3 py-1 rounded-full bg-black-200 border border-white/10 ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-white-100 text-[20px] max-w-4xl leading-[32px] font-medium'
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex sm:flex-row flex-col sm:flex-nowrap flex-wrap justify-center items-stretch gap-8 w-full'>
        {projects.slice(0, 3).map((project, index) => (
          <ProjectCard 
            key={`project-${index}`} 
            index={index} 
            width="sm:w-[340px]" 
            height="h-[520px]"
            titleSize="text-[24px]"
            {...project} 
          />
        ))}
      </div>

      <div className='mt-12 flex sm:flex-row flex-col sm:flex-nowrap flex-wrap justify-center items-stretch gap-5 w-full'>
        {projects.slice(3, 7).map((project, index) => (
          <ProjectCard 
            key={`project-${index + 3}`} 
            index={index + 3} 
            width="sm:w-[280px]" 
            height="h-[500px]"
            titleSize="text-[18px]"
            {...project} 
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
