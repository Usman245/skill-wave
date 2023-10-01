import "./module.css";
import bg from "../images/bg.jpg";
import { useState, useEffect } from "react";
import { Link, Element } from "react-scroll";
import Services from "./Services";
import About from "./About";
import Portfolio from "./Projects";
import Contact from "./Contact";

const Hero = () => {
  const [scrolling, setScrolling] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleToggel = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <div>
      <Element name="home">
        <div className="background-container">
          <div className="background-image mobile:w-full">
            <img src={bg} alt="" className=" mobile:h-screen mobile:w-full" />
          </div>
          <div className="background-overlay overflow-hidden">
            <div>
              <div
                className={`navbar flex fixed w-full py-3 mobile:py-1 mobile:mx-0  justify-between mr-16 text-white ${
                  scrolling ? "scrolled" : ""
                } `}
              >
                <div className="ml-10 mt-6 mobile:ml-1 mobile:mt-2 flex flex-col justify-center items-center">
                  <div
                    className={`relative logotext font-secondary ${
                      scrolling ? "text-black" : ""
                    }`}
                  >
                    <h4 className="text-5xl mobile:text-3xl">Skill</h4>
                    <h4
                      className="text-4xl mobile:text-2xl relative "
                      style={{ right: "-36px", top: "-12px" }}
                    >
                      Wave
                    </h4>
                  </div>
                </div>
                <div
                  className={`menu flex text-2xl pt-12 pr-4 ${
                    open
                      ? "bg-white flex-col w-screen mt-0 mr-0 pr-0 text-black"
                      : ""
                  } `}
                >
                  <div className=" hidden mobile:flex" onClick={handleToggel}>
                    {open ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-10 h-10 pt-1 ml-12"
                        onClick={handleToggel}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`w-10 mr-4 h-10 mt-0 relative bottom-6 ${
                          scrolling ? "text-black" : ""
                        }`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                      </svg>
                    )}
                  </div>
                  <ul
                    className={`flex  text-gray-400 justify-between text-3xl  ${
                      scrolling ? "whiteul" : ""
                    } ${open ? "flex-col openedul" : "mobile:hidden block"}`}
                  >
                    <li>
                      <Link to="home" smooth={true} duration={500}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="service" smooth={true} duration={500}>
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link to="about" smooth={true} duration={500}>
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="portfolio" smooth={true} duration={500}>
                        Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link to="contact" smooth={true} duration={500}>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="main justify-center text-start w-full h-full flex flex-col">
              <h2 className=" mx-12 mobile:mx-2">
                <span className=" text-8xl font-secondary  text-white font-extrabold mobile:text-4xl">
                  SKILL WAVE
                </span>
              </h2>
              <p className=" text-white text-3xl mt-8 mx-16 font-medium mobile:mx-2 mobile:text-xl">
                Pakistan's No one Startup Studio
              </p>
              <div className="border border-white rounded-full ml-12 bottom-12 absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10  text-white border-white rounded-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Element>
      <Element name="service">
        <Services />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="portfolio">
        <Portfolio />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
};

export default Hero;
