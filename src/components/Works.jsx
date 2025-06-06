import React, { Suspense, useMemo } from "react";
import { motion } from "framer-motion";
const Tilt = React.lazy(() => import("react-parallax-tilt"));
import OptimizedImage from "./OptimizedImage";

import { styles } from "../styles";
import { linkedin } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
}) => {
  const memoizedContent = useMemo(() => (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Suspense fallback={<div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full min-h-[500px]'></div>}>
        <Tilt
          tiltMaxAngleX={45}
          tiltMaxAngleY={45}
          scale={1}
          transitionSpeed={450}
          className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
        >
          <div className='relative w-full h-[230px] group'>
            <OptimizedImage
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl cursor-pointer'
              onClick={() => window.open(demo_link, "_blank")}
            />
            
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <OptimizedImage
                  src={linkedin}
                  alt='linkedin link'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='absolute inset-0 bg-black bg-opacity-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
              <p className='text-white text-lg font-semibold'>Click to see the demo</p>
            </div>
          </div>

          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>

          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </Suspense>
    </motion.div>
  ), [index, name, description, tags, image, source_code_link, demo_link]);

  return memoizedContent;
};

const Works = () => {
  const memoizedProjects = useMemo(() => projects, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to live demos. It reflects my ability to solve complex problems, 
          work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {memoizedProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
