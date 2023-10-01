import React from "react";
import Aboutpic from "../images/about.jpg";
import "./module.css";

const About = () => {
  return (
    <div className=" flex mt-10 mobile:mt-4 mx-0 mobile:flex-col w-full mobile:h-auto aboutSection">
      <div className=" w-3/5 flex flex-col justify-center items-center bg-black text-white mobile:w-full">
        <h3 className="text-6xl mobile:text-4xl mx-8 mt-5 mobile:mx-1 text-start font-bold">
          About Us
        </h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className=" w-14 h-14 text-white font-extrabold"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
        </svg>

        <p className="mx-20 mt-5 mobile:mx-8 text-2xl mobile:text-xl mobile:mb-16">
          Established in 2020, our startup is a dynamic collective of freelance
          professionals who excel in providing a spectrum of services. From web
          development to Android app design, graphic artistry, and content
          creation, we've got you covered. Our journey is defined by a passion
          for innovation, a commitment to excellence, and a dedication to
          bringing your vision to life. We thrive on turning challenges into
          opportunities and creating tailored solutions that empower your
          business. Let us be your creative partners in success as we work
          together to transform your ideas into reality.
        </p>
      </div>
      <div className="w-2/5 mobile:w-full h-full">
        <img
          src={Aboutpic}
          alt="images"
          className="h-full w-full mobile:h-auto mobile:w-full"
        />
      </div>
    </div>
  );
};

export default About;
