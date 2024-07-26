import { FaGithub, FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
import { projects } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const Projects = () => {

  const navigateToLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="py-20">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Personal + freelancing projects
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Projects
        </h2>
      </motion.div>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className="flex flex-col items-center justify-center sm:w-96 w-[80vw] mb-10 bg-gradient-to-r rounded-3xl from-slate-800 via-slate-900 to-slate-950"
            
            key={item.id}
          >
            <div className="relative grid sm:w-96 w-[80vw] h-[30vh] overflow-hidden lg:rounded-3xl" >
              <img
                src={item.img}
                alt="cover"
                className="z-10 absolute bottom-0 mb-4"
              />
              <a
                    href={item.source_code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex absolute items-center justify-center w-14 h-14 rounded-full z-10 top-0 right-0  hover:scale-110 transition-transform duration-300"
                >
                    <FaGithub size='35' className="text-black hover:bg-gray-300 rounded-full" />
                </a>
            </div>
            
            <h1 className="font-bold text-white lg:text-2xl md:text-xl text-base line-clamp-1">
              {item.name}
            </h1>
            <p className="lg:text-lg lg:font-normal font-light ml-4 text-sm line-clamp-4 text-gray-400 mt-2 mb-4">
              {item.description}
            </p>
            <div className="flex items-center justify-between w-full ml-4 mt-7 mb-3">
              <div className="flex items-center">
                {item.iconLists.map((icon, index) => (
                  <div
                    key={index}
                    className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    style={{
                      transform: `translateX(-${5 * index + 2}px)`,
                    }}
                  >
                    <img src={icon} alt={`icon${index}`} className="p-2" />
                  </div>
                ))}
              </div>
              {item.livelink && (
                <div className="flex justify-center items-center cursor-pointer" onClick={() => navigateToLink(item.livelink)}>
                  <p className="flex lg:text-lg md:text-xs text-sm text-gray-400">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ml-3" color="#CBACF9" />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects);
