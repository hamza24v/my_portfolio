import React from 'react'
import { SectionWrapper } from "../hoc";
import { testimonials } from '../constants';
import { InfiniteMovingCards } from './InfiniteCards';
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Quotes from my colleagues</p>

        <h1 className={`${styles.sectionHeadText} text-center`}>
          Testimonials
        </h1>
      </motion.div>

      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  )
}

export default SectionWrapper(Testimonials, "testimonials");