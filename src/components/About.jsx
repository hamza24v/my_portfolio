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
        As an ambitious software developer with a Bachelors in Computer
        Engineering, I excel in creating dynamic, responsive websites and
        applications using modern technologies React, SQL, MongoDB, Java, and
        Python. Certified in AWS Cloud Practitioner, I am proficient in
        deploying and maintaining scalable, secure cloud-based solutions. My
        experience in a fast-paced startup environment has honed my ability to
        quickly adapt and contribute across multiple domains, setting me apart
        from my peers. I am passionate about leveraging my diverse skill set to
        build innovative web solutions that meet complex business needs. Let's
        connect!
      </motion.p>
    </div>
  );
}

export default SectionWrapper(About, "about");
