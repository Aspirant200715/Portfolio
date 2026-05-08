import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const EducationCard = ({ education }: any) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#161b22",
        color: "#fff",
        boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)",
        borderRadius: "20px",
        border: "1px solid rgba(88, 166, 255, 0.1)",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={education.date}
      iconStyle={{ background: "#0a0c10", boxShadow: "0 0 0 4px #58a6ff" }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={education.icon}
            alt={education.company_name}
            className='w-[60%] h-[60%] object-contain rounded-full'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold tracking-tight'>{education.title}</h3>
        <p
          className='text-accent text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {education.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {education.points.map((point: string, index: number) => (
          <li
            key={`education-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider leading-relaxed'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Academic Journey
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Education.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {education.map((edu, index) => (
            <EducationCard
              key={`education-${index}`}
              education={edu}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
