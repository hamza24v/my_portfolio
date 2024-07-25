import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
import { projects } from "../constants";
import { textVariant } from "../utils/motion";
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
          <div
            className="flex flex-col items-center justify-center sm:w-96 w-[80vw] mb-10"
            key={item.id}
          >
            <div className="relative flex items-center justify-center sm:w-96 w-[80vw] h-[30vh] overflow-hidden lg:rounded-3xl" style={{ backgroundColor: "#13162D" }}>
              <img src={item.bgimg} alt="background" className="absolute inset-0 w-full h-full object-cover" />
              <img
                src={item.img}
                alt="cover"
                className="z-10 absolute bottom-0 mb-4"
              />
            </div>
            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
              {item.name}
            </h1>
            <p className="lg:text-lg lg:font-normal font-light text-sm line-clamp-5 text-gray-400 mt-2 mb-4">
              {item.description}
            </p>
            <div className="flex items-center justify-between w-full mt-7 mb-3">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects);
