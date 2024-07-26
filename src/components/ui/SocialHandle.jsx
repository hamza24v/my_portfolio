import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { textVariant } from "../../utils/motion";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";

function SocialHandle() {
  return (
    <motion.div
      variants={textVariant()}
      className="relative z-30 flex space-x-6"
    >
      <a
        href="https://www.linkedin.com/in/hamza-shueib"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full ring-1 text-slate-950 hover:scale-110 transition-transform duration-300"
      >
        <FaLinkedin size="35" className="text-blue-600 " />
      </a>
      <a
        href="https://github.com/hamza24v"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full ring-1 text-slate-950 hover:scale-110 transition-transform duration-300"
      >
        <FaGithub size="35" className="text-white " />
      </a>
    </motion.div>
  );
}

export default SectionWrapper(SocialHandle, "socialhandle");
