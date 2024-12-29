import React, { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";
import { motion } from "framer-motion";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardToShow, setcardToShow] = useState(1);
  const NextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };
  const PrevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };
  useEffect(() => {
    const updateToCardShow = ()=>{
        if(window.innerWidth>=1024){
            setcardToShow(projectsData.length)
        }
        else{
            setcardToShow(1)
        }
    }
    updateToCardShow()
    window.addEventListener("resize", updateToCardShow)
  
    return () => {
        window.removeEventListener("resize", updateToCardShow)
    }
  }, [])
  
  return (
    <motion.div
    initial={{ opacity: 0, x: 100 }}
    transition={{ duration: 1.5 }}
    whileInView={{ opacity: 1, x: 0 }}
      className="container mx-auto py-4 pt-20 md:px-20 lg:px-32 w-full overflow-hidden"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects{" "}
        <span className="underline underline-offset-4 font-light decoration-1 under">
          Completed
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8 mx-auto">
        Crafting Spaces, Building Legacies—Explore Our Portfolio
      </p>
      {/* slider */}
      <div className="flex justify-end items-center mb-8">
        <button
          onClick={PrevProject}
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Previous projects"
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button
          onClick={NextProject}
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Next project"
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>
      {/* slider container  */}
      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardToShow}%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                src={project.image}
                alt={project.id}
                className="w-full h-auto mb-14"
              />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center ">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {project.price} <span className="px-1">|</span> {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
