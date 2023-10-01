import { useState, useEffect } from "react";
import logo from "../images/logo.png";
import "./module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
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
      <div
        className={`navbar flex fixed w-full h-32  justify-between mr-16 text-white ${
          scrolling ? "scrolled" : ""
        } `}
      >
        <div className="log mobile:ml-3">
          <img
            src={logo}
            alt="logo"
            className=" w-36 h-32 relative mobile:w-24 logoimg"
          />
          <div className={`relative logotext ${scrolling ? "text-black" : ""}`}>
            <h4 className="text-2xl">Wach</h4>
            <h4
              className="text-2xl relative "
              style={{ right: "-36px", top: "-12px" }}
            >
              Park
            </h4>
          </div>
        </div>
        <div
          className={`menu flex text-2xl pt-12 pr-4 ${
            open ? "bg-white flex-col w-screen mt-0 mr-0 pr-0 text-black" : ""
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
                className={`w-10 mr-4 h-10 mt-1 ${
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
            className={`flex  text-gray-400 justify-between text-2xl  ${
              scrolling ? "whiteul" : ""
            } ${open ? "flex-col openedul" : "mobile:hidden block"}`}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/carwash">About</Link>
            </li>
            <li>
              <Link to="/interior">Portfolio</Link>
            </li>
            <li>
              <Link to="/faq">Carrier</Link>
            </li>
            <li>
              <Link to="/philosophy">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
