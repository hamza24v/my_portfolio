import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

function About() {
  return (
    <div className="flex flex-col justify-center items-center">
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>About Me</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-white mt-4 text-center text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        As a driven software developer with a Bachelor's in Computer Engineering, I specialize in crafting 
        dynamic, responsive websites and applications using React, SQL, MongoDB, Java, and Python. Certified 
        as an AWS Cloud Practitioner, I excel in deploying scalable, secure cloud solutions. My startup 
        experience has sharpened my adaptability and multi-domain expertise, setting me apart. I'm passionate 
        about using my diverse skills to build innovative web solutions for complex business challenges.
      </motion.p>
    </div>
  );
}

export default SectionWrapper(About, "about");
