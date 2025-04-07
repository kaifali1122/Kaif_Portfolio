import React, { Suspense, useMemo } from "react";
import { motion } from "framer-motion";
const Tilt = React.lazy(() => import("react-parallax-tilt"));
import OptimizedImage from "./OptimizedImage";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  const memoizedContent = useMemo(() => (
    <Suspense fallback={<div className='xs:w-[250px] w-full bg-tertiary rounded-[20px] min-h-[280px]'></div>}>
      <Tilt
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        scale={1}
        transitionSpeed={450}
        className='xs:w-[250px] w-full'
      >
        <motion.div
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
          <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <OptimizedImage
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
    </Suspense>
  ), [index, title, icon]);

  return memoizedContent;
};

const About = () => {
  const memoizedServices = useMemo(() => services, []);
  
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a passionate web developer with expertise in React.js, JavaScript, and modern web technologies. 
        I specialize in creating responsive and user-friendly web applications. With a strong foundation in 
        front-end development and a keen eye for design, I strive to build efficient and scalable solutions 
        that provide exceptional user experiences. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {memoizedServices.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
