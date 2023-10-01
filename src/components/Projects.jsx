import { useState } from "react";
import ProjectImg from "../images/project1.png";
import projectImg from "../images/project3.jpg";
import "./module.css";

const Projects = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleTouchStart = () => {
    setIsZoomed(true);
  };

  const handleTouchEnd = () => {
    setIsZoomed(false);
  };
  return (
    <div className=" mt-12 flex flex-col justify-center items-center overflow-hidden">
      <h3 className="text-6xl font-extrabold mobile:text-4xl">Our Project</h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className=" w-14 h-14 text-black relative top-3 font-extrabold"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
      </svg>
      <div className="project flex justify-center items-center mobile:flex-col">
        <a
          href="https://github.com/Usman245"
          target="_blank"
          rel="noreferrer"
          className={`h-full mx-16 mobile:mx-1  w-2/5 mobile:w-11/12 transition-transform transform hover:scale-105 mobile:my-2 ${
            isZoomed ? "scale-105" : ""
          }`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img src={ProjectImg} alt="" className=" h-full mx-5 mobile:mx-1" />
        </a>
        <a
          href="https://github.com/Usman245"
          target="_blank"
          rel="noreferrer"
          className={`h-full mobile:h-auto  w-2/5 mobile:w-11/12 mx-16 mobile:mx-1 mobile:my-2 transition-transform transform hover:scale-105 ${
            isZoomed ? "scale-105" : ""
          }`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img src={projectImg} alt="" className=" h-full mx-5 mobile:mx-1 " />
        </a>
      </div>
    </div>
  );
};

export default Projects;
